class ApplicationController < ActionController::API

  def encode_token(payload)
  JWT.encode payload, secret, 'HS256'
  end

  def artist_payload(artist)
  { artist_id: artist.id }
  end

  def secret
  Rails.application.credentials.mod4_secret
  end

  def token
  request.headers["Authorization"]
  end

  def decoded_token
  JWT.decode token, secret, true, { algorithm: 'HS256' }
  end

  def current_artist
  Artist.find(decoded_token[0]["artist_id"])
  end



end
