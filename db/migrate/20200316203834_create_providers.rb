class CreateProviders < ActiveRecord::Migration[6.0]
  def change
    create_table :providers do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :role, null: false
      t.string :facility, null: false
      t.string :neighborhood
      t.string :city, null: false
      t.string :state, null: false
      t.string :email, null: false
      t.string :contact_info, null: false
      t.jsonb :requests, null: false, default: []
      t.text :description, null: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
