module Types
  module Enums
    class RequestTypeEnum < Types::BaseEnum
      ::Provider::REQUEST_TYPES.each do |type, friendly|
        value(type, friendly)
      end
    end
  end
end
