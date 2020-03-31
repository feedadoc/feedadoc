class AddLatAndLngToProvider < ActiveRecord::Migration[6.0]
  def change
    add_column :providers, :country, :string, null: false, default: "United States"
    add_column :providers, :latitude, :decimal
    add_column :providers, :longitude, :decimal
    add_index :providers, [:latitude, :longitude]

    add_column :volunteers, :country, :string, null: false, default: "United States"
    add_column :volunteers, :latitude, :decimal
    add_column :volunteers, :longitude, :decimal
    add_index :volunteers, [:latitude, :longitude]
  end
end
