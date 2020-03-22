class AddFirstNameToVolunteers < ActiveRecord::Migration[6.0]
  def change
    remove_column :volunteers, :name, :string, null: false
    add_column :volunteers, :first_name, :string, null: false
    add_column :volunteers, :last_name, :string, null: false
    remove_column :responses, :status, :string, null: false
  end
end
