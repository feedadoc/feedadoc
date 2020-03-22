module Types
  class Response < Types::BaseObject
    field :id, ID, null: false
    field :provider, Types::Provider, null: false
    field :requests, [Types::Enums::RequestTypeEnum], null: false
    field :description, String, null: true
    field :availabilities, [Types::Enums::Availabilities], null: false
    field :phone, String, null: true
    field :social, String, null: true
    field :over_18, Boolean, null: false
  end
end
