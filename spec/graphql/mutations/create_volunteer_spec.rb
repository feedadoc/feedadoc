require "rails_helper"

describe Mutations::CreateVolunteer, type: :request do
  let(:mutation) {
    <<~GRAPHQL
      mutation CreateVolunteer($firstName: String!, $lastName: String,
                               $neighborhood: String, $city: String!, $state: String!,
                               $email: String!, $providerId: ID!) {
        createVolunteer(input: {
                                firstName: $firstName, lastName: $lastName,
                                neighborhood: $neighborhood, city: $city, state: $state,
                                email: $email, providerId: $providerId
                              }) {
          errors
          volunteer { id, firstName, providers { edges { node { id, firstName } } } }
        }
      }
    GRAPHQL
  }

  it "creates a Volunteer and sends an email" do
    provider = create(:provider)

    expect do
      expect do
        post '/graphql', params: { query: mutation, variables: { firstName: 'bob', lastName: 'smith',
                                                                 neighborhood: 'sunset', city: 'sf', state: 'CA',
                                                                 email: 'bob@example.com', providerId: provider.id
        } }
      end.to change { Volunteer.count }.by(1)
    end.to have_enqueued_job(ActionMailer::MailDeliveryJob)

    json = JSON.parse(response.body)
    expect(json['data']['createVolunteer']['volunteer']).to include(
                                                            "firstName" => "bob"
                                                          )
    expect(json['data']['createVolunteer']['volunteer']['providers']['edges'].first['node']).to include(
                                                                                                  "id" => provider.to_param,
                                                                                                  "firstName" => provider.first_name
                                                                                                )
  end
end
