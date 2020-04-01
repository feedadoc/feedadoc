require "rails_helper"

describe Mutations::CreateProvider, type: :request do
  let(:mutation) {
    <<~GRAPHQL
      mutation CreateProvider($firstName: String!, $lastName: String,
                          $neighborhood: String, $city: String!, $state: String!, $country: String!, $address: String!,
                          $latitude: Float!, $longitude: Float!,
                          $email: String!, $facility: String!, $role: String!,
                          $requests: [String!]!, $description: String!) {
        createProvider(input: {
                                firstName: $firstName, lastName: $lastName,
                                neighborhood: $neighborhood, city: $city, state: $state, country: $country, address: $address,
                                latitude: $latitude, longitude: $longitude,
                                email: $email, facility: $facility, role: $role,
                                requests: $requests, description: $description
                              }) {
          errors
          provider { id, firstName, requests { type, satisfied } }
        }
      }
    GRAPHQL
  }

  it "creates a Provider and sends an email" do
    expect do
      expect do
        post '/graphql',
             params: { query: mutation, variables: { firstName: 'bob', lastName: 'smith',
                                                     neighborhood: 'sunset', city: 'sf', state: 'CA', country: 'USA',
                                                     address: '123 fake street, sf, ca',
                                                     latitude: 123, longitude: 234,
                                                     email: 'bob@example.com', facility: 'ucsf', role: 'doctor',
                                                     requests: %w(pets cleaning), description: 'stuff'
                                                   },
                     }.to_json,
             headers: { "CONTENT_TYPE" => "application/json" }
      end.to change { Provider.count }.by(1)
    end.to have_enqueued_job(ActionMailer::MailDeliveryJob)

    json = JSON.parse(response.body)
    expect(json['data']['createProvider']['provider']).to include(
                                                            "firstName" => "bob",
                                                            "requests" => [{ "type" => "pets", "satisfied" => false },
                                                                           { "type" => "cleaning", "satisfied" => false }]
                                                          )
  end
end
