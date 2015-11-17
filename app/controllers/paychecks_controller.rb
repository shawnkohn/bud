class PaychecksController < ApplicationController
    def index
        respond_with Paycheck.all
    end

    def create
        respond_with Paycheck.create(paycheck_params)
    end

    def show
        respond_with Paycheck.find(params[:id])
    end


    
    private

    def paycheck_params
        params.require(:paycheck).permit(:name, :amount)
    end
end
