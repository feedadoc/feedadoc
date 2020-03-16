class Response < ApplicationRecord
  belongs_to :request
  belongs_to :volunteer
end
