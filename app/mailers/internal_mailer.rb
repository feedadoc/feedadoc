class InternalMailer < ApplicationMailer
  INTERNAL_EMAIL = 'hello@hospitalhero.care'
  def request_created_email
    @provider = params[:linked_token].entity
    @request_url = HOST_AND_SCHEME + '/providers/' + @provider.to_param
    @edit_url = HOST_AND_SCHEME + '/providers/' + params[:linked_token].token + '/edit'
    mail(template_path: 'provider_mailer', to: INTERNAL_EMAIL, reply_to: @provider.email, subject: "Request from #{@provider.full_name} (Request ID: #{@provider.id})")
  end
end
