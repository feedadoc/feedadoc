module Types
  class MutationType < Types::BaseObject
    field :create_provider, mutation: Mutations::CreateProvider
    field :create_volunteer, mutation: Mutations::CreateVolunteer
  end
end
