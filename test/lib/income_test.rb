require "minitest/autorun"
require "Income"


class TestIncome < Minitest::Test
    def test_gross_income
        income = Income.new
        test_user = User.new()
        paycheck_one = Paycheck.new()

        paycheck_one.amount = 10
        paycheck_two = Paycheck.new()
        paycheck_two.amount = 9.99

        test_user.paychecks<<(paycheck_one)
        test_user.paychecks<<(paycheck_two)
        income.paychecks = test_user.paychecks
        assert_equal income.gross_income, BigDecimal.new("19.99")

    end

end
