module Types
  class QueryType < Types::BaseObject
    include FilterHelpers

    field :providers,
          Types::Connections::ProviderConnection,
          connection: true,
          max_page_size: 6,
          null: false do
      argument :filters, Types::ProviderFilter, required: false
      argument :order_by, Types::ProviderOrder, required: false
    end
    def providers(filters: nil, order_by: nil)
      filters = filters.to_h
      updated_within_days = filters.delete(:updated_within_days)
      active_requests = filters.delete(:active_requests)
      city = filters.delete(:city)
      scope = ::Provider.where(where(filters)).order(order(order_by))

      if updated_within_days
        scope = scope.where("updated_at > ?", updated_within_days.days.ago)
      end

      if active_requests
        scope = scope.where("requests @> ?", '[{"satisfied": false}]')
      end

      if city
        scope = scope.where("lower(city) like ?", "%#{city.downcase}%")
      end

      scope
    end

    field :provider, Types::Provider, null: false do
      argument :id, ID, required: true
    end
    def provider(id:)
      ::Provider.find(id)
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
