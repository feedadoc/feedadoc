import { gql } from "apollo-boost";

export const CREATE_PROVIDER = gql`
  mutation CreateProvider(
    $firstName: String!
    $lastName: String
    $neighborhood: String
    $city: String!
    $state: String!
    $country: String!
    $email: String!
    $facility: String
    $role: String!
    $requests: [String!]!
    $description: String!
    $latitude: Float!
    $longitude: Float!
    $address: String!
  ) {
    createProvider(
      input: {
        firstName: $firstName
        lastName: $lastName
        neighborhood: $neighborhood
        city: $city
        state: $state
        country: $country
        email: $email
        facility: $facility
        role: $role
        requests: $requests
        description: $description
        latitude: $latitude
        longitude: $longitude
        address: $address
      }
    ) {
      errors
      editLink
      provider {
        id
      }
    }
  }
`;
