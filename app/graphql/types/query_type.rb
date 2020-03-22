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
