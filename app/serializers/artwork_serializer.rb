class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :year, :description, :medium,  :artist_id,  :artworkimage
  
end
