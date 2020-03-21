class ProviderMailer < ApplicationMailer
  def request_created_email
    @provider = params[:linked_token].entity.provider
    @request_url = 'localhost:3000/' + 'request/' + params[:linked_token].entity.id.to_s
    @edit_url  = 'localhost:3000/' + 'provider/' + params[:linked_token].token
    mail(to: @provider.email, subject: 'Your help request has been created.')
  end
end
