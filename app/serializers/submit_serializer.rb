class SubmitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :artist, :call
  belongs_to :artist
  belongs_to :call
end
