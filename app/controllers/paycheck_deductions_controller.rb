class PaycheckDeductionsController < ApplicationController

    def create
        post = Post.find(params[:post_id])
        deduction = post.paycheck_deductions.create(paycheck_deduction_params)
        respond_with paycheck, deduction
    end

    private

    def paycheck_deduction_params
        params.require(:paycheck_deduction).permit(:name, :amount, :is_deducted_pre_tax)
    end
end
