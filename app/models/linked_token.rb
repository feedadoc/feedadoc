class LinkedToken < ApplicationRecord
  belongs_to :entity, polymorphic: true
  before_validation :set_token, on: :create

  private

  def set_token
    self.token ||= SecureRandom.uuid
  end
end
