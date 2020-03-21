class LinkCreator
  class << self
    def create(entity)
      LinkedToken.create!(entity: entity)
    end
  end
end