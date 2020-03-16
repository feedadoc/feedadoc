class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.references :request, null: false, foreign_key: true
      t.references :volunteer, null: false, foreign_key: true
      t.text :status, null: false

      t.timestamps
    end
  end
end
