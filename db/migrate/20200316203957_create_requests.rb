class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.references :provider, null: false, foreign_key: true
      t.string :request_type, null: false
      t.text :description, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
