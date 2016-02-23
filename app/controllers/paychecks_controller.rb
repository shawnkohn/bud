class PaychecksController < ApplicationController

    def index
        respond_with current_user.budget.paychecks
    end

    def create
        respond_with current_user.budget.paychecks.create(paycheck_params)
    end

    def show
        respond_with current_user.budget.paychecks.find(params[:id])
    end

    private

    def paycheck_params
        params.require(:paycheck).permit(:name, :amount)
    end
end
