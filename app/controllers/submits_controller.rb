class SubmitsController < ApplicationController

    def index
        submits = Submit.all
        render json: SubmitSerializer.new(submits)
      end

    def show
        submit = Submit.find(params[:id])
        render json: SubmitSerializer.new(submit)
      end
end
