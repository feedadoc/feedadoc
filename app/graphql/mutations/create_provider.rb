class Mutations::CreateProvider < Mutations::BaseMutation
  null true

  argument :first_name, String, required: true
  argument :last_name, String, required: false
  argument :neighborhood, String, required: false
  argument :city, String, required: true
  argument :state, String, required: true
  argument :country, String, required: true
  argument :address, String, required: true
  argument :latitude, Float, required: true
  argument :longitude, Float, required: true
  argument :email, String, required: true
  argument :facility, String, required: false
  argument :role, String, required: true
  argument :description, String, required: true
  argument :requests, [String], required: true

  field :provider, Types::FullProvider, null: true
  field :edit_link, String, null: true
  field :errors, [String], null: false

  def resolve(first_name:, last_name: "",
              neighborhood: "", city:, state:, country:, address:, latitude:, longitude:,
              email:, facility: "", role:, requests:, description:)
    provider = Provider.new(
      first_name: first_name,
      last_name: last_name,
      neighborhood: neighborhood,
      city: city,
      state: state,
      country: country,
      address: address,
      latitude: latitude,
      longitude: longitude,
      email: email,
      facility: facility,
      role: role,
      description: description,
      ip: context[:remote_ip],
      requests: requests.map { |type| { type: type, satisfied: false } }
    )

    if provider.save
      linked_token = LinkCreator.create_token(provider)
      ProviderNotifications.send_provider_created_notifications(linked_token)
      {
        provider: provider,
        edit_link: "/providers/#{linked_token.token}/edit",
        errors: [],
      }
    else
      {
        provider: nil,
        edit_link: nil,
        errors: provider.errors.full_messages
      }
    end
  end
end
