# frozen_string_literal: true

class ProviderMailerPreview < ActionMailer::Preview
  def request_created_email
    ProviderMailer.with(linked_token: LinkedToken.first).request_created_email
  end
end