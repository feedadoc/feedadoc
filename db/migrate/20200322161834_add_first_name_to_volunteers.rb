class AddFirstNameToVolunteers < ActiveRecord::Migration[6.0]
  def change
    remove_column :volunteers, :name, :string, null: false
    add_column :volunteers, :first_name, :string, null: false
    add_column :volunteers, :last_name, :string, null: false

    remove_column :responses, :status, :string, null: false
    add_column :responses, :requests, :string, array: true, null: false
    add_column :responses, :description, :text
    add_column :responses, :availabilities, :string, array: true, null: false
    add_column :responses, :phone, :string
    add_column :responses, :social, :string
    add_column :responses, :over_18, :boolean, null: false
  end
end
