module Types
  class Request < Types::BaseObject
    field :id, ID, null: false
    field :provider, Types::Provider, null: false
    field :status, Types::Enums::RequestStatusEnum, null: false
    field :description, String, null: false
    field :request_type, Types::Enums::RequestTypeEnum, null: false
  end

  class RequestFilter < Types::BaseInputObject
    argument :city, String, required: false
    argument :state, String, required: false
    argument :request_type, Types::Enums::RequestTypeEnum, required: false
    argument :status, Types::Enums::RequestStatusEnum, required: false
  end

  class RequestSort < Types::BaseEnum
    value("ID", value: :id)
    value("CITY", value: :city)
    value("STATE", value: :state)
  end

  class RequestOrder < Types::BaseInputObject
    argument :sort, Types::RequestSort, required: false
    argument :direction, Types::Enums::SortOrder, required: false
  end
end
