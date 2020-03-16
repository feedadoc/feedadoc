module Types
  class QueryType < Types::BaseObject
    field :professionals,
          Types::Connections::ProfessionalConnection,
          connection: true,
          max_page_size: 50,
          null: false do
      argument :filters, Types::ProfessionalFilter, required: false
      argument :order_by, Types::ProfessionalOrder, required: false
    end

    def professionals
      []
    end
  end
end
