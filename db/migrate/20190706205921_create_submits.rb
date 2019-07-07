class CreateSubmits < ActiveRecord::Migration[6.0]
  def change
    create_table :submits do |t|
      t.string :portfolio
      t.references :artist, null: false, foreign_key: true
      t.references :call, null: false, foreign_key: true

      t.timestamps
    end
  end
end
