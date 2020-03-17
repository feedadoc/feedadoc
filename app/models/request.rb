class Request < ApplicationRecord
  belongs_to :provider
  has_many :responses

  validates :request_type, :description, :status, presence: true

  before_validation :set_status

  def set_status
    self.status ||= "new"
  end
end
