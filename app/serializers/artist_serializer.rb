class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :bio, :website, :artworks, :submits
end
