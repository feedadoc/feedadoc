class Professional < ApplicationRecord
  validates :name, :city, :job_title, :facility, :contact_info, presence: true
  validates :email, format: /@/
  validates :state, inclusion: { in: Volunteer::STATES }
end
