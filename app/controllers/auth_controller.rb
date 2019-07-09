class AuthController < ApplicationController
  def login
      artist = Artist.find_by(name: params[:name])
      is_authenticated = artist.authenticate(params[:password])

      if is_authenticated
          # payload = { artist_id: artist.id }

          # token = JWT.encode payload, 'fortytwo', 'HS256'
          
          # render json: {token: encode_token(payload)}
          render json: { token: encode_token(artist_payload(artist)) }
      else

      render json: {errors: "WRONG"}
      end
  end
end