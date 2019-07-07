class OrgsController < ApplicationController
    def index
        orgs = Org.all
        render json: OrgSerializer.new(orgs)
      end

    def show
        org = Org.find(params[:id])
        render json: OrgSerializer.new(org)
      end
end
