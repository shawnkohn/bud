class Income

    attr_writer :paychecks
    
    def gross_income
        gi = @paychecks.sum(:amount)
        byebug
        return BigDecimal.new(@paychecks.sum(:amount).to_s)
    end
end
