class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  set_id :id
  attributes :title, :year, :description, :medium,  :artist_id
  
  attribute :artworkfile do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object.artworkfile, only_path: true) if object.artworkfile.attachment
  end

end
