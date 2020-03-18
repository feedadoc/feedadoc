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

    field :requests,
          Types::Connections::RequestConnection,
          connection: true,
          max_page_size: 50,
          null: false do
      argument :filters, Types::RequestFilter, required: false
      argument :order_by, Types::RequestOrder, required: false
    end
    def requests(filters: nil, order_by: nil)
      o = order(order_by)
      f = where(filters)
      city = f.delete(:city)
      state = f.delete(:state)

      scope = ::Request.joins(:provider).where(f)
      scope = scope.where(providers: { city: city }) if city
      scope = scope.where(providers: { state: state }) if state

      if o.keys.first.in?(%w(city state))
        scope = scope.merge(Provider.order(o))
      else
        scope = scope.order(o)
      end

      scope
    end
  end
end
