module BudgetsHelper
    def calculate_gross_income(budget)
        return budget.paychecks.sum(:amount);
    end

    def calculate_net_income(budget)
        net_income = 0
        budget.paychecks.each do |paycheck|
            net_income += paycheck.amount
            net_income -= paycheck.paycheck_deductions.sum(:amount)
        end
        return net_income
    end
end
