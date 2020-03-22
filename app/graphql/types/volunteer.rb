module Types
  class Volunteer < Types::BaseObject
    include FilterHelpers

    field :id, ID, null: false
    field :first_name, String, null: false
    field :neighborhood, String, null: true
    field :city, String, null: false
    field :state, String, null: false
    field :providers,
          Types::Connections::ProviderConnection,
          connection: true,
          max_page_size: 50,
          null: false do
      argument :filters, Types::ProviderFilter, required: false
      argument :order_by, Types::ProviderOrder, required: false
    end
    def providers(filters: nil, order_by: nil)
      object.providers.where(where(filters)).order(order(order_by))
    end
  end
end
