class AddIpToVolunteer < ActiveRecord::Migration[6.0]
  def change
    add_column :volunteers, :ip, :string, null: true
    add_column :providers, :ip, :string, null: true
  end
end
