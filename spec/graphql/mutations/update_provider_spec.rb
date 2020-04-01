require "rails_helper"

describe Mutations::UpdateProvider, type: :request do
  let(:mutation) do
    <<~GRAPHQL
      mutation UpdateProvider($token: String!,
                              $firstName: String!, $lastName: String,
                              $neighborhood: String, $city: String!, $state: String!, $country: String!, $address: String!,
                              $latitude: Float!, $longitude: Float!,
                              $email: String!, $facility: String!, $role: String!,
                              $requests: [String!]!, $description: String!, $active: Boolean!) {
        updateProvider(input: {
                                token: $token,
                                firstName: $firstName, lastName: $lastName,
                                neighborhood: $neighborhood, city: $city, state: $state, country: $country, address: $address,
                                latitude: $latitude, longitude: $longitude,
                                email: $email,
                                facility: $facility, role: $role,
                                requests: $requests, description: $description,
                                active: $active
                              }) {
          errors
          provider { id, firstName, lastName, requests { type, satisfied } }
        }
      }
    GRAPHQL
  end

  it "updates a Provider" do
    provider = create(:provider)
    linked_token = LinkCreator.create_token(provider)

    post '/graphql',
         params: { query: mutation, variables: { token: linked_token.token,
                                                 firstName: 'bob', lastName: 'smith',
                                                 neighborhood: 'sunset', city: 'sf', state: 'CA', country: 'USA',
                                                 address: '123 fake st, sf, ca, usa',
                                                 latitude: 123, longitude: 234,
                                                 email: 'bob@example.com', facility: 'ucsf', role: 'doctor',
                                                 requests: %w(pets supplies), description: 'stuff',
                                                 active: true
                                               },
                 }.to_json,
         headers: { "CONTENT_TYPE" => "application/json" }

    json = JSON.parse(response.body)
    expect(json['data']['updateProvider']['provider']).to include(
                                                            "firstName" => "bob",
                                                            "lastName" => "smith",
                                                            "requests" => [{ "type" => "cleaning", "satisfied" => true },
                                                                           { "type" => "supplies", "satisfied" => false },
                                                                           { "type" => "pets", "satisfied" => false }]
                                                          )
  end
end
