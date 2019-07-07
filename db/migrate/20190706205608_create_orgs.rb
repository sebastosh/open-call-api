class CreateOrgs < ActiveRecord::Migration[6.0]
  def change
    create_table :orgs do |t|
      t.string :name
      t.string :mission
      t.string :url
      t.string :street
      t.string :city
      t.integer :zip
      t.string :country

      t.timestamps
    end
  end
end
