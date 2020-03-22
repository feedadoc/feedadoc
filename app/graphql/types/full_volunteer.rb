# This type exposes all fields on the Volunteer. It should only be returned to an authorized request via a LinkedToken.

module Types
  class FullVolunteer < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :last_name, String, null: true
    field :neighborhood, String, null: true
    field :city, String, null: false
    field :state, String, null: false
    field :email, String, null: false
    field :responses, [Types::Response], null: false
  end
end
