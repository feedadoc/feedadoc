class VolunteerMailer < ApplicationMailer
  def response_created_email
    provider = params[:provider]
    @volunteer = params[:linked_token].entity
    @request_url = HOST_AND_SCHEME + '/providers/' + provider.to_param
    # @edit_url = HOST_AND_SCHEME + '/volunteers/' + params[:linked_token].token + '/edit'
    mail(to: @volunteer.email, subject: 'Your help response has been created.')
  end
end
