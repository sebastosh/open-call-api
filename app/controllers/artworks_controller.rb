class ArtworksController < ApplicationController

    def index
        artworks = Artwork.all
        render json: ArtworkSerializer.new(artworks)
      end

    def show
        artwork = Artwork.find(params[:id])
        render json: ArtworkSerializer.new(artwork)
      end
    
    def create
        artwork = Artwork.create(artwork_params)
        render json: artwork
    end

    def artwork_params
        params.require(:artwork).permit!
      end

end
