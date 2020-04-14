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
end
