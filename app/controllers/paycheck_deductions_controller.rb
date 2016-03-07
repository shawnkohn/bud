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

    def update
        paycheck = current_user.budget.paychecks.find(params[:paycheck_id])
        deduction = paycheck.paycheck_deductions.find(params[:id])
        respond_to do |format|
            if (deduction.update(paycheck_deduction_params))
                format.json { head :no_content, status: :ok }
            else
                format.json { render json: deduction.errors, status: :unprocessable_entity }
            end
        end
    end

    def destroy
        paycheck = current_user.budget.paychecks.find(params[:paycheck_id])
        deduction = paycheck.paycheck_deductions.find(params[:id])
        respond_to do |format|
            if (deduction.destroy)
                format.json { head :no_content, status: :ok }
            else
                format.json { render json: deduction.errors, status: :unprocessable_entity }
            end
        end
    end
    
    private

    def paycheck_deduction_params
        params.require(:paycheck_deduction).permit(:name, :amount)
    end
end
