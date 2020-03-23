class ProviderMailer < ApplicationMailer
  def request_created_email
    @provider = params[:linked_token].entity
    @request_url = HOST_AND_SCHEME + '/providers/' + @provider.to_param
    @edit_url = HOST_AND_SCHEME + '/providers/' + params[:linked_token].token + '/edit'
    mail(to: @provider.email, subject: 'Your help request has been created.')
  end

  def volunteer_response_email
    @provider = params[:provider]
    @volunteer = params[:volunteer]
    @response = params[:response]
    mail(to: @provider.email, subject: 'Your help request has been created.', reply_to: @volunteer.email)
  end
end
