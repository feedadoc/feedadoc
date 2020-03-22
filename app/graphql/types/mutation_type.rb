module Types
  class MutationType < Types::BaseObject
    field :create_provider, mutation: Mutations::CreateProvider
  end
end
