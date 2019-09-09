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
        artwork = Artwork.new(artwork_params)
      
        if artwork.save
        render json: artwork
        else
          render json: artwork.errors.full_messages
        end
    end

    def artwork_params
        params.require(:artwork).permit!
      end

end
