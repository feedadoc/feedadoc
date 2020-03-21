class Types::LinkedTokenEntityUnionType < Types::BaseUnion
  description 'Represents either a Provider or Request'
  possible_types Types::Provider, Types::Request
  def self.resolve_type(object, _context)
    case object
    when Provider then Types::Provider
    when Request then Types::Request
    else
      raise "Unknown linked token type"
    end
  end
end
