module Types
  class MutationType < Types::BaseObject
    field :create_provider_and_request, mutation: Mutations::CreateProviderAndRequest
  end
end
