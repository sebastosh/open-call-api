class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :year, :image, :description, :artist_id, :artist
  
end
