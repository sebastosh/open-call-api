class OrgSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :mission, :url, :street, :city, :zip, :country, :calls
end
