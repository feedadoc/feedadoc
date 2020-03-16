module Types
  class Professional < Types::BaseObject
    description "Major Tom Professionals"

    field :id, ID, null: false
    field :name, String, null: false
  end

  class ProfessionalFilter < Types::BaseInputObject
    argument :id, ID, required: false
    argument :name, String, required: false
  end

  class ProfessionalSort < Types::BaseEnum
    description "The object field to use for this sort operation"
    value("ID", "The Professional's ID", value: :id)
    value("NAME", "The Professional's name", value: :name)
  end

  class ProfessionalOrder < Types::BaseInputObject
    description "Define a sort field and direction"
    argument :sort, Types::ProfessionalSort, required: false
    argument :direction, Types::Enums::SortOrder, required: false
  end
end
