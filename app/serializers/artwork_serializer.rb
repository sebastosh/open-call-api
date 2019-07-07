class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :year, :image, :description, :artist
  belongs_to :artist
end
