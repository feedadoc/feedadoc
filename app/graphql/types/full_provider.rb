# This type exposes all fields on the Provider. It should only be returned to an authorized request via a LinkedToken.

module Types
  class FullProvider < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :last_name, String, null: true
    field :email, String, null: false
    field :role, String, null: false
    field :facility, String, null: false
    field :neighborhood, String, null: true
    field :city, String, null: false
    field :state, String, null: false
    field :country, String, null: false
    field :address, String, null: false
    field :latitude, Float, null: false
    field :longitude, Float, null: false
    field :description, String, null: false
    field :requests, [Types::Request], null: false
    field :active, Boolean, null: false
  end
end
