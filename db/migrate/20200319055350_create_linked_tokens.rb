class CreateLinkedTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :linked_tokens do |t|
      t.string :token, null: false
      t.references :entity, polymorphic: true, null: false

      t.timestamps

      t.index :token, unique: true
      t.index [:token, :entity_type, :entity_id]
    end
  end
end
