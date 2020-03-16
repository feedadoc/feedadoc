module Types
  class MutationType < Types::BaseObject
    field :create_professional, mutation: Mutations::CreateProfessional
  end
end
