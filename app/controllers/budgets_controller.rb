class BudgetsController < ApplicationController

    include BudgetsHelper

    def show
        respond_with current_user.budget
    end
    
    def net_income
        respond_with calculate_net_income(current_user.budget)
    end

    def gross_income
        respond_with calculate_gross_income(current_user.budget)
    end

    
    
end
