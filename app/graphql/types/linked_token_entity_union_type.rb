class Types::LinkedTokenEntityUnionType < Types::BaseUnion
  description 'Represents either a FullProvider or FullVolunteer'
  possible_types Types::FullProvider, Types::FullVolunteer
  def self.resolve_type(object, _context)
    case object
    when Provider then Types::FullProvider
    when Volunteer then Types::FullVolunteer
    else
      raise "Unknown linked token type"
    end
  end
end
