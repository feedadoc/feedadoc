class Mutations::CreateProfessional < Mutations::BaseMutation
  null true

  argument :name, String, required: true

  field :professional, Types::Professional, null: true
  field :errors, [String], null: false

  def resolve(body:, post_id:)
    if professional.save
      {
        professional: professional,
        errors: [],
      }
    else
      {
        professional: nil,
        errors: professional.errors.full_messages
      }
    end
  end
end
