require "rails_helper"

describe ProviderNotifications do
  include ActiveJob::TestHelper
  it "sends emails to provider and help desk" do
    expect { 
      described_class.send_provider_created_notifications(LinkedToken.new(id: 'test'))
    }.to have_enqueued_job.on_queue('mailers').with(
        'ProviderMailer', 'request_created_email', 'deliver_now', any_args
    ).and have_enqueued_job.on_queue('mailers').with(
        'InternalMailer', 'request_created_email', 'deliver_now', any_args
    )
  end

  describe ".send_volunteer_response_created_notifications" do
    it "sends emails regarding a volunteer response being created to the provider and help desk" do
      provider = Provider.new(id: 1)
      volunteer = Volunteer.new(id: 1)
      response = Response.new(id: 1)

      expect {
        ProviderNotifications.send_volunteer_response_created_notifications(provider, volunteer, response)
      }.to have_enqueued_job.on_queue("mailers").with(
          "ProviderMailer", "volunteer_response_email", "deliver_now", any_args
      ).and have_enqueued_job.on_queue('mailers').with(
        'InternalMailer', 'volunteer_response_email', 'deliver_now', any_args
      )
    end
  end
end
