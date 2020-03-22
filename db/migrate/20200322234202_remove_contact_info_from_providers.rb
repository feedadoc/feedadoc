class RemoveContactInfoFromProviders < ActiveRecord::Migration[6.0]
  def change
    remove_column :providers, :contact_info, :string, null: false
  end
end
