class CreateCalls < ActiveRecord::Migration[6.0]
  def change
    create_table :calls do |t|
      t.string :name
      t.string :description
      t.string :medium
      t.date :deadline
      t.references :org, null: false, foreign_key: true

      t.timestamps
    end
  end
end
