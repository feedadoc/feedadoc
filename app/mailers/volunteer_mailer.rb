class VolunteerMailer < ApplicationMailer
  def response_created_email
    @volunteer = params[:linked_token].entity
    @edit_url = HOST_AND_SCHEME + '/volunteers/' + params[:linked_token].token + '/edit'
    mail(to: @volunteer.email, subject: 'Your help response has been created.')
  end
end
