class InternalMailer < ApplicationMailer
  INTERNAL_TEAM_EMAIL = 'team@hospitalhero.care'
  INTERNAL_SUPPORT_EMAIL = 'hello@hospitalhero.care'
  def request_created_email
    @provider = params[:linked_token].entity
    @request_url = HOST_AND_SCHEME + '/providers/' + @provider.to_param
    @edit_url = HOST_AND_SCHEME + '/providers/' + params[:linked_token].token + '/edit'
    mail(template_path: 'provider_mailer', from: INTERNAL_TEAM_EMAIL, to: INTERNAL_SUPPORT_EMAIL, reply_to: @provider.email, subject: "Request from #{@provider.full_name} (Request ID: #{@provider.id})")
  end

  def volunteer_response_email
    @provider = params[:provider]
    @volunteer = params[:volunteer]
    @response = params[:response]
    mail(template_path: "provider_mailer", to: INTERNAL_SUPPORT_EMAIL, from: INTERNAL_TEAM_EMAIL, reply_to: @volunteer.email,
      subject: "Offer made to #{@provider.first_name} from #{@volunteer.first_name} (RequestId: #{@provider.id})")
  end
end
