class ProviderNotifications
  class << self
    def send_provider_created_notifications(linked_token)
      ProviderMailer.with(linked_token: linked_token).request_created_email.deliver_later
      InternalMailer.with(linked_token: linked_token).request_created_email.deliver_later
    end
  end
end