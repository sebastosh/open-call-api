class ArtistsController < ApplicationController
    def index
        artists = Artist.all
        render json: ArtistSerializer.new(artists)
      end

    def show
        artist = Artist.find(params[:id])
        render json: ArtistSerializer.new(artist)
    end

    def create
        artist = Artist.create(artist_params)
        if artist.valid?
            render json: { token: encode_token(artist_payload(artist)) }
        else
            render json: {errors: artist.errors.full_messages}
        end
    end

    def update
        artist = Artist.find_by(id: params[:id])
        artist.update(artist_params)
        render json: artist
      end

    def profile
        render json: current_artist
    end

    private

    def artist_params
        params.require(:artist).permit!
    end
end
