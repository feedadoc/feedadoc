class Mutations::CreateProviderAndRequest < Mutations::BaseMutation
  null true

  argument :first_name, String, required: true
  argument :last_name, String, required: false
  argument :neighborhood, String, required: false
  argument :city, String, required: true
  argument :state, String, required: true
  argument :email, String, required: true
  argument :facility, String, required: true
  argument :role, String, required: true
  argument :request_type, Types::Enums::RequestTypeEnum, required: true
  argument :request_description, String, required: true
  argument :contact_info, String, required: true

  field :provider, Types::Provider, null: true
  field :request, Types::Request, null: true
  field :errors, [String], null: false

  def resolve(first_name:, last_name: "", neighborhood: "", city:, state:, email:, facility:, role:, contact_info:,
              request_type:, request_description:)

    provider = Provider.new(
      first_name: first_name,
      last_name: last_name,
      neighborhood: neighborhood,
      city: city,
      state: state,
      email: email,
      facility: facility,
      role: role,
      contact_info: contact_info
    )
    request = provider.requests.build(request_type: request_type, description: request_description)

    # Force both to validate so that errors get generated
    provider.valid?
    request.valid?

    if provider.valid? && request.valid?
      provider.save!
      request.save!
      linked_token = LinkCreator.create_token(request)
      ProviderMailer.with(linked_token: linked_token).request_created_email.deliver_later
      {
        provider: provider,
        request: request,
        errors: [],
      }
    else
      {
        provider: nil,
        request: nil,
        errors: provider.errors.full_messages + request.errors.full_messages.map {|m| "Request #{m.downcase}"} - ["Requests is invalid"]
      }
    end
  end
end
