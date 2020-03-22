class ProviderMailer < ApplicationMailer
  def request_created_email
    @provider = params[:linked_token].entity
    @request_url = HOST_AND_SCHEME + '/provider/' + @provider.to_param
    @edit_url = HOST_AND_SCHEME + '/provider/edit?token=' + params[:linked_token].token
    mail(to: @provider.email, subject: 'Your help request has been created.')
  end
end
