class PaychecksController < ApplicationController

    def index
        respond_with current_user.paychecks
    end

    def create
        respond_with current_user.paychecks.create(paycheck_params)
    end

    def show
        respond_with current_user.paychecks.find(params[:id])
    end

    def net_income
        respond_with 5
    end

    def gross_income
        respond_with 10
    end

    
    private

    def paycheck_params
        params.require(:paycheck).permit(:name, :amount)
    end
end
