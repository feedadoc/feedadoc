class Mutations::CreateVolunteer < Mutations::BaseMutation
  null true

  argument :first_name, String, required: true
  argument :last_name, String, required: false
  argument :neighborhood, String, required: false
  argument :city, String, required: true
  argument :state, String, required: true
  argument :email, String, required: true
  argument :provider_id, ID, required: true

  field :volunteer, Types::Volunteer, null: true
  field :errors, [String], null: false

  def resolve(first_name:, last_name: "", neighborhood: "", city:, state:, email:, provider_id:)
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
      email: email
    )

    if volunteer.save
      volunteer.providers << provider
      linked_token = LinkCreator.create_token(volunteer)
      VolunteerMailer.with(linked_token: linked_token).response_created_email.deliver_later

      {
        volunteer: volunteer,
        errors: [],
      }
    else
      {
        volunteer: nil,
        errors: volunteer.errors.full_messages
      }
    end
  end
end
