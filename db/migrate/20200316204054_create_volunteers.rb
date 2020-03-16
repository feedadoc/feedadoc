class CreateVolunteers < ActiveRecord::Migration[6.0]
  def change
    create_table :volunteers do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :neighborhood
      t.string :city, null: false
      t.string :state, null: false

      t.timestamps
    end
  end
end
