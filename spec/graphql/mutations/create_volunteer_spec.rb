require "rails_helper"

describe Mutations::CreateVolunteer, type: :request do
  let(:mutation) {
    <<~GRAPHQL
      mutation CreateVolunteer($firstName: String!, $lastName: String,
                               $neighborhood: String, $city: String!, $state: String!, $country: String!,
                               $latitude: Float!, $longitude: Float!,
                               $email: String!, $providerId: ID!, $requests: [String!]!,
                               $description: String, $availabilities: [Availabilities!]!,
                               $phone: String, $social: String, $over18: Boolean! 
                              ) {
        createVolunteer(input: {
                                firstName: $firstName, lastName: $lastName,
                                neighborhood: $neighborhood, city: $city, state: $state, country: $country,
                                latitude: $latitude, longitude: $longitude,
                                email: $email,
                                providerId: $providerId, requests: $requests,
                                description: $description, availabilities: $availabilities,
                                phone: $phone, social: $social, over18: $over18
                              }) {
          errors
          volunteer { id, firstName, responses { provider { id }, requests, availabilities } }
        }
      }
    GRAPHQL
  }

  it "creates a Volunteer and sends an email" do
    provider = create(:provider)

    expect do
      expect do
        post '/graphql',
             params: { query: mutation, variables: { firstName: 'bob', lastName: 'smith',
                                                     neighborhood: 'sunset', city: 'sf', state: 'CA', country: 'USA',
                                                     latitude: 123, longitude: 234,
                                                     email: 'bob@example.com', providerId: provider.id,
                                                     requests: ["cleaning"], description: "foo",
                                                     availabilities: %w(mid-day nights), phone: "123",
                                                     social: "@twitter", over18: true
                                                   }
                     }.to_json,
             headers: { "CONTENT_TYPE" => "application/json" }
      end.to change { Volunteer.count }.by(1)
    end.to have_enqueued_job(ActionMailer::MailDeliveryJob).exactly(2).times

    json = JSON.parse(response.body)
    expect(json['data']['createVolunteer']['volunteer']).to include("firstName" => "bob")
    expect(json['data']['createVolunteer']['volunteer']['responses'].first).to include(
                                                                                        "provider" => { "id" => provider.to_param },
                                                                                        "requests" => ["cleaning"],
                                                                                        "availabilities" => %w(mid-day nights)
                                                                                      )
  end

  it "validates the request" do
    provider = create(:provider)

    expect do
      expect do
        post '/graphql',
             params: { query: mutation, variables: { firstName: 'bob', lastName: 'smith',
                                                     neighborhood: 'sunset', city: 'sf', state: 'CA', country: 'USA',
                                                     latitude: 123, longitude: 234,
                                                     email: 'bob@example.com', providerId: provider.id,
                                                     requests: ["cleaning"], description: "foo",
                                                     availabilities: %w(), phone: "123",
                                                     social: "@twitter", over18: true
             }
             }.to_json,
             headers: { "CONTENT_TYPE" => "application/json" }
      end.to change { Volunteer.count }.by(0)
    end.to_not have_enqueued_job(ActionMailer::MailDeliveryJob)

    json = JSON.parse(response.body)
    expect(json['data']['createVolunteer']['errors']).to include("You must select at least one availabilities")
  end
end
