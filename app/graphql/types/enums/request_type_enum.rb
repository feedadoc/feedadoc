module Types
  module Enums
    class RequestTypeEnum < Types::BaseEnum
      value("childcare")
      value("shopping")
      value("cleaning")
      value("meals")
      value("laundry")
      value("lodging")
      value("supplies")
      value("petCare")
    end
  end
end
