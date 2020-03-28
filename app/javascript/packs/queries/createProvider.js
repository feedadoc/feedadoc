import { gql } from "apollo-boost";

export const CREATE_PROVIDER = gql`
  mutation CreateProvider(
    $firstName: String!
    $lastName: String
    $neighborhood: String
    $city: String!
    $state: String!
    $email: String!
    $facility: String!
    $role: String!
    $requests: [String!]!
    $description: String!
  ) {
    createProvider(
      input: {
        firstName: $firstName
        lastName: $lastName
        neighborhood: $neighborhood
        city: $city
        state: $state
        email: $email
        facility: $facility
        role: $role
        requests: $requests
        description: $description
      }
    ) {
      errors
      provider {
        id
      }
    }
  }
`;
