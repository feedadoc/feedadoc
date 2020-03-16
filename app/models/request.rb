class Request < ApplicationRecord
  belongs_to :professional

  validates :request_type, :description, :status, presence: true
end
