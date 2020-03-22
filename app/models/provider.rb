class Provider < ApplicationRecord
  validates :first_name, :city, :role, :facility, :contact_info, :description, presence: true
  validates :email, format: /@/
  validates :state, inclusion: { in: Volunteer::STATES, message: "is not included in the list of valid states" }
  validate :validate_requests

  has_many :responses
  has_many :volunteers, through: :responses

  def validate_requests
    errors.add(:requests, "must be an Array of Requests") unless requests.is_a?(Array)
    errors.add(:base, "You must select at lease one request") unless requests.length > 0
    errors.add(:requests, "must all have fields satisfied and a type") unless requests.all? { |r| r.has_key?("type") && r.has_key?("satisfied") }
  end
end
