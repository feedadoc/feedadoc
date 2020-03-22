require "rails_helper"

describe Mutations::UpdateProvider, type: :request do
  let(:mutation) do
    <<~GRAPHQL
      mutation UpdateProvider($token: String!,
                              $firstName: String!, $lastName: String,
                              $neighborhood: String, $city: String!, $state: String!,
                              $email: String!, $contactInfo: String!,
                              $facility: String!, $role: String!,
                              $requests: [String!]!, $description: String!) {
        updateProvider(input: {
                                token: $token,
                                firstName: $firstName, lastName: $lastName,
                                neighborhood: $neighborhood, city: $city, state: $state,
                                email: $email, contactInfo: $contactInfo,
                                facility: $facility, role: $role,
                                requests: $requests, description: $description
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
                                                 neighborhood: 'sunset', city: 'sf', state: 'CA',
                                                 email: 'bob@example.com', contactInfo: 'internet',
                                                 facility: 'ucsf', role: 'doctor',
                                                 requests: %w(childcare pets), description: 'stuff'
                                               },
                 }.to_json,
         headers: { "CONTENT_TYPE" => "application/json" }

    json = JSON.parse(response.body)
    expect(json['data']['updateProvider']['provider']).to include(
                                                            "firstName" => "bob",
                                                            "lastName" => "smith",
                                                            "requests" => [{ "type" => "childcare", "satisfied" => false },
                                                                           { "type" => "cleaning", "satisfied" => true },
                                                                           { "type" => "pets", "satisfied" => false }]
                                                          )
  end
end
