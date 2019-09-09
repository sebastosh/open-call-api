class OrgSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :mission, :url, :street, :city, :zip, :country, :calls

  attribute :orgimage do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object.orgimage, only_path: true) if object.orgimage.attachment
  end
end
