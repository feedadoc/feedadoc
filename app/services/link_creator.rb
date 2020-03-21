class LinkCreator
  class << self
    def create_token(entity)
      LinkedToken.create!(entity: entity)
    end
  end
end