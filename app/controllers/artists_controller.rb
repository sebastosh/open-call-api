class ArtistsController < ApplicationController
    def index
        artists = Artist.all
        render json: ArtistSerializer.new(artists)
      end

    def show
        artist = Artist.find(params[:id])
        render json: ArtistSerializer.new(artist)
      end
end
