class Provider < ApplicationRecord
  REQUEST_TYPES = %w(childcare shopping cleaning meals laundry lodging supplies pets)

  validates :first_name, :city, :role, :facility, :description, presence: true
  validates :email, format: /@/
  validates :state, inclusion: { in: Volunteer::STATES, message: "is not included in the list of valid states" }
  validate :validate_requests

  has_many :responses
  has_many :volunteers, through: :responses

  def validate_requests
    errors.add(:requests, "must be an Array of Requests") unless requests.is_a?(Array)
    errors.add(:base, "You must select at lease one request") unless requests.length > 0
    errors.add(:requests, "must all have fields satisfied and have a valid type") unless requests.all? { |r| r.is_a?(Hash) && r["type"].in?(REQUEST_TYPES) && r.has_key?("satisfied") }
  end
end
