class PaycheckDeductionsController < ApplicationController

    def create
        paycheck = current_user.budget.paychecks.find(params[:paycheck_id])
        deduction = paycheck.paycheck_deductions.create(paycheck_deduction_params)
        respond_with paycheck, deduction
    end

    def index
        paycheck = current_user.budget.paychecks.find(params[:paycheck_id])
        respond_with paycheck.paycheck_deductions
    end

    private

    def paycheck_deduction_params
        params.require(:paycheck_deduction).permit(:name, :amount, :is_deducted_pre_tax)
    end
end
