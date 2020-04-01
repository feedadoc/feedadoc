class Mutations::CreateVolunteer < Mutations::BaseMutation
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
  argument :provider_id, ID, required: true
  argument :requests, [Types::Enums::RequestTypeEnum], required: true
  argument :description, String, required: false
  argument :availabilities, [Types::Enums::Availabilities], required: true
  argument :phone, String, required: false
  argument :social, String, required: false
  argument :over_18, Boolean, required: true

  field :volunteer, Types::FullVolunteer, null: true
  field :errors, [String], null: false

  def resolve(first_name:, last_name: "",
              neighborhood: "", city:, state:, country:, address:,
              latitude:, longitude:,
              email:, provider_id:,
              requests:, description: "",
              availabilities:, phone: "", social: "", over_18:)
    provider = Provider.find_by(id: provider_id)

    if provider.nil?
      return({ volunteer: nil, errors: ["The given Provider could not be found."] })
    end

    volunteer = Volunteer.new(
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
      ip: context[:remote_ip]
    )
    response = volunteer.responses.build(provider: provider, requests: requests,
                                         description: description, availabilities: availabilities,
                                         phone: phone, social: social, over_18: over_18)

    if volunteer.save
      linked_token = LinkCreator.create_token(volunteer)
      VolunteerMailer.with(linked_token: linked_token).response_created_email.deliver_later
      ProviderMailer.with(provider: provider, volunteer: volunteer, response: response).volunteer_response_email.deliver_later

      {
        volunteer: volunteer,
        errors: [],
      }
    else
      {
        volunteer: nil,
        errors: volunteer.errors.full_messages + volunteer.responses.map { |r| r.errors.full_messages }.flatten
      }
    end
  end
end
