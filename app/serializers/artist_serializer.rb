class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :country, :artworks, :submits
end
