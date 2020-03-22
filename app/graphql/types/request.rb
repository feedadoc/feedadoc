module Types
  class Request < Types::BaseObject
    field :type, Types::Enums::RequestTypeEnum, null: false
    field :satisfied, Boolean, null: false
  end
end
