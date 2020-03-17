module Types
  class Provider < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :role, String, null: false
    field :facility, String, null: false
    field :neighborhood, String, null: true
    field :city, String, null: false
    field :state, String, null: false
  end

  class ProviderFilter < Types::BaseInputObject
    argument :id, ID, required: false
  end

  class ProviderSort < Types::BaseEnum
    value("ID", "The Provider's ID", value: :id)
  end

  class ProviderOrder < Types::BaseInputObject
    argument :sort, Types::ProviderSort, required: false
    argument :direction, Types::Enums::SortOrder, required: false
  end
end
