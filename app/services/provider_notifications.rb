class ProviderNotifications
  class << self
    def send_provider_created_notifications(linked_token)
      ProviderMailer.with(linked_token: linked_token).request_created_email.deliver_later
      InternalMailer.with(linked_token: linked_token).request_created_email.deliver_later
    end

    def send_volunteer_response_created_notifications(provider, volunteer, response)
      ProviderMailer.with(provider: provider, volunteer: volunteer, response: response).volunteer_response_email.deliver_later
      InternalMailer.with(provider: provider, volunteer: volunteer, response: response).volunteer_response_email.deliver_later
    end
  end
end