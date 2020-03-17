class Provider < ApplicationRecord
  has_many :requests

  validates :first_name, :city, :role, :facility, :contact_info, presence: true
  validates :email, format: /@/
  validates :state, inclusion: { in: Volunteer::STATES, message: "is not included in the list of valid states" }
end
