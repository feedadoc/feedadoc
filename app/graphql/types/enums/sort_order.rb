module Types
  module Enums
    class SortOrder < Types::BaseEnum
      value "ASC", "Ascending order", value: :asc
      value "DESC", "Descending order", value: :desc
    end
  end
end
