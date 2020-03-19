class LinkCreator
  class << self
    def create(entity)
      LinkedToken.create!(entity: entity, token: SecureRandom.uuid)
    end
  end
end