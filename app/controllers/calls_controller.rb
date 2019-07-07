class CallsController < ApplicationController
    def index
        calls = Call.all
        render json: CallSerializer.new(calls)
      end

    def show
        call = Call.find(params[:id])
        render json: CallSerializer.new(call)
      end
end
