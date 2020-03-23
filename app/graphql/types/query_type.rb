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
      filters = filters.to_h
      updated_within_days = filters.delete(:updated_within_days)
      scope = ::Provider.where(where(filters)).order(order(order_by))
      if updated_within_days
        scope = scope.where("updated_at > ?", updated_within_days.days.ago)
      end
      scope
    end

    field :provider,
        Types::Connections::ProviderConnection,
        connection: true,
        null: false do
      argument :id, ID, required: true
    end
    def provider(args)
      ::Provider.where(id: args[:id].to_i)
    end

    field :linked_token,
          Types::LinkedTokenEntityUnionType,
          null: false do
      argument :token, String, required: true
    end
    def linked_token(args)
      LinkedToken.find_by(token: args[:token]).entity
    end
  end
end
