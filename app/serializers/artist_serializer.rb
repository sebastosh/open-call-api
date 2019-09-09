class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :bio, :website, :artworks, :submits

  attribute :avatar do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object.avatar, only_path: true) if object.avatar.attachment
  end
end
