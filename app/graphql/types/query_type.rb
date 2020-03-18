module Types
  class QueryType < Types::BaseObject
    include FilterHelpers

    field :providers,
          Types::Connections::ProviderConnection,
          connection: true,
          max_page_size: 50,
          null: false do
      argument :filters, Types::ProviderFilter, required: false
      argument :order_by, Types::ProviderOrder, required: false
    end
    def providers(filters: nil, order_by: nil)
      ::Provider.where(where(filters)).order(order(order_by))
    end

    field :volunteer_count, Integer, null: false
    def volunteer_count
      ::Volunteer.count
    end
  end
end
