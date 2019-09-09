class CallSerializer
  include FastJsonapi::ObjectSerializer
  attributes :org, :name, :description, :medium, :deadline, :submits

  attribute :callimage do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object.callimage, only_path: true) if object.callimage.attachment
  end

end
 