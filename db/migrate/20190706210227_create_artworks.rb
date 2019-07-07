class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.references :artist, null: false, foreign_key: true
      t.string :title
      t.date :year
      t.string :image
      t.string :description
      t.string :medium

      t.timestamps
    end
  end
end
