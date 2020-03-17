module Types
  class Request < Types::BaseObject
    field :id, ID, null: false
    field :provider, Types::Provider, null: false
    field :status, String, null: false
    field :description, String, null: false
    field :request_type, String, null: false
  end

  class RequestFilter < Types::BaseInputObject
    argument :id, ID, required: false
  end

  class RequestSort < Types::BaseEnum
    value("ID", "The Request's ID", value: :id)
  end

  class RequestOrder < Types::BaseInputObject
    argument :sort, Types::RequestSort, required: false
    argument :direction, Types::Enums::SortOrder, required: false
  end
end
