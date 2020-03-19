class LinkedToken < ApplicationRecord
  belongs_to :entity, polymorphic: true
end
