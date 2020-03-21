module Types
  class LinkedTokenType < Types::BaseObject
    field :id, ID, null: false
    field :entity, Types::LinkedTokenEntityUnionType, null: false
  end
end
