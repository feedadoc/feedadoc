class Response < ApplicationRecord
  belongs_to :provider
  belongs_to :volunteer

  validate :validate_requests, :validate_availabilities

  def validate_requests
    errors.add(:requests, "must be an Array of Requests") unless requests.is_a?(Array)
    errors.add(:base, "You must select at least one request") unless requests.length > 0
    errors.add(:requests, "must all be Strings") unless requests.all? { |r| r.is_a?(String) }
  end

  def validate_availabilities
    errors.add(:availabilities, "must be an Array of availabilities") unless availabilities.is_a?(Array)
    errors.add(:base, "You must select at least one availabilities") unless availabilities.length > 0
    errors.add(:availabilities, "must all be Strings") unless availabilities.all? { |r| r.is_a?(String) }
  end
end
