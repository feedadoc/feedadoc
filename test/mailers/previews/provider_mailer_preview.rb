# Preview all emails at http://localhost:3000/rails/mailers/provider_mailer
class ProviderMailerPreview < ActionMailer::Preview
  def request_created_email
    ProviderMailer.with(linked_token: LinkedToken.first).request_created_email
  end
end
