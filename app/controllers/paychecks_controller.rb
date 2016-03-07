class PaychecksController < ApplicationController

    def index
        respond_with current_user.budget.paychecks
    end

    def create
        respond_with current_user.budget.paychecks.create(paycheck_params)
    end

    def update
        paycheck = current_user.budget.paychecks.find(params[:id])
        respond_to do |format|
            if (paycheck.update(paycheck_params))
                format.json { head :no_content, status: :ok }
            else
                format.json { render json: deduction.errors, status: :unprocessable_entity }
            end
        end
    end

    def destroy
        paycheck = current_user.budget.paychecks.find(params[:id])
        respond_to do |format|
            if (paycheck.paycheck_deductions.destroy_all && paycheck.destroy)
                format.json { head :no_content, status: :ok }
            else
                format.json { render json: deduction.errors, status: :unprocessable_entity }
            end
        end
    end
    private

    def paycheck_params
        params.require(:paycheck).permit(:name, :amount)
    end
end
