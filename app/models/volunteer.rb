class Volunteer < ApplicationRecord
  STATES = %w(AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WV WI WY)

  has_many :responses

  validates :first_name, :city, presence: true
  validates :email, format: /@/
  validates :state, inclusion: { in: Volunteer::STATES, message: "is not included in the list of valid states" }
  validates_associated :responses
end
