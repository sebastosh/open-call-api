class SubmitsController < ApplicationController

    def index
        submits = Submit.all
        render json: SubmitSerializer.new(submits)
      end

    def show
        submit = Submit.find(params[:id])
        render json: SubmitSerializer.new(submit)
      end

      def create
        submit = Submit.create(submit_params)
        render json: submit
    end

    def submit_params
        params.require(:submit).permit!
      end
end
