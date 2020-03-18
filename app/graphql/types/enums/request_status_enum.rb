module Types
  module Enums
    class RequestStatusEnum < Types::BaseEnum
      value("new")
      value("pending")
      value("complete")
    end
  end
end
