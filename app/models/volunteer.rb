class Volunteer < ApplicationRecord
  STATES = %w(AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WV WI WY)

  has_many :responses, dependent: :destroy
  has_one :linked_token, as: :entity, dependent: :destroy

  validates :first_name, :address, presence: true
  validates :email, format: /@/
  validates_associated :responses

  def full_name
    [first_name, last_name].select(&:present?).join(' ')
  end
end
