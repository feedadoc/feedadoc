class Mutations::UpdateProvider < Mutations::BaseMutation
  null true

  argument :token, String, required: true
  argument :first_name, String, required: true
  argument :last_name, String, required: false
  argument :neighborhood, String, required: false
  argument :city, String, required: true
  argument :state, String, required: true
  argument :country, String, required: true
  argument :latitude, Float, required: true
  argument :longitude, Float, required: true
  argument :email, String, required: true
  argument :facility, String, required: false
  argument :role, String, required: true
  argument :active, Boolean, required: true
  argument :description, String, required: true
  argument :requests, [String], required: true

  field :provider, Types::FullProvider, null: true
  field :errors, [String], null: false

  def resolve(token:, first_name:, last_name: "",
              neighborhood: "", city:, state:, country:,
              latitude:, longitude:,
              email:, facility: "", role:, requests:, description:, active:)
    provider = LinkedToken.find_by(token: token).entity

    if provider.nil? || !provider.is_a?(Provider)
      return({ provider: nil, errors: ["The given Provider could not be found."] })
    end

    old_request_types = provider.requests.map { |request| request["type"] }.tally
    new_request_types = requests.tally

    new_requests = Provider::REQUEST_TYPES.map { |type, _|
      if old_request_types[type] && !new_request_types[type]
        { "type" => type, "satisfied" => true }
      elsif old_request_types[type] || new_request_types[type]
        { "type" => type, "satisfied" => false }
      end
    }.compact

    result = provider.update(
      first_name: first_name, last_name: last_name,
      neighborhood: neighborhood, city: city, state: state, country: country,
      latitude: latitude, longitude: longitude,
      email: email, facility: facility, role: role,
      description: description, requests: new_requests,
      active: active
    )

    if result
      {
        provider: provider,
        errors: [],
      }
    else
      {
        provider: nil,
        errors: provider.errors.full_messages
      }
    end
  end
end
