module Types
  module Enums
    class RequestTypeEnum < Types::BaseEnum
      ::Provider::REQUEST_TYPES.each do |type|
        value(type)
      end
    end
  end
end
