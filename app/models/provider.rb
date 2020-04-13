class Provider < ApplicationRecord
  REQUEST_TYPES = {
    "childcare" => "Childcare", # backwards comparability
    "shopping" => "Errands/Shopping",
    "cleaning" => "Housecleaning",
    "meals" => "Meals",
    "laundry" => "Laundry",
    "lodging" => "Lodging",
    "supplies" => "Medical Supplies",
    "pets" => "Pet care",
    "other" => "Other"
  }

  validates :first_name, :address, :role, :description, presence: true
  validates :email, format: /@/
  validate :validate_requests

  has_many :responses, dependent: :destroy
  has_many :volunteers, through: :responses
  has_one :linked_token, as: :entity, dependent: :destroy

  def validate_requests
    errors.add(:requests, "must be an Array of Requests") unless requests.is_a?(Array)
    errors.add(:base, "You must select at lease one request") unless requests.length > 0
    errors.add(:requests, "must all have fields satisfied and have a valid type") unless requests.all? { |r| r.is_a?(Hash) && REQUEST_TYPES[r["type"]] && r.has_key?("satisfied") }
  end
end
