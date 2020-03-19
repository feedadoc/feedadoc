class CreateLinkedTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :linked_tokens do |t|
      t.string :token
      t.references :entity, polymorphic: true, null: false

      t.timestamps
    end
  end
end
