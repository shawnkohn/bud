require 'test_helper'

class PaychecksControllerTest < ActionController::TestCase

    include Devise::TestHelpers

    setup :initialize_paycheck
    
    test "should get index" do
        get :index, :format => :json, user_id: @user
        assert_response :success
    end

    test "should create paycheck" do
        assert_difference('Paycheck.count') do
            post :create, paycheck: {name: "This one is new", amount: 1234, user_id: @user.id}
        end
    end

    test "should show paycheck" do
        get :show, user_id: @user, id: @paycheck, :format => :json
        assert_response :success
    end

    test "should get net_income" do
        get :net_income, :format => :json
        assert_response :success
    end

    test "should get gross_income" do
        get :gross_income, :format => :json
        assert_response :success
    end
    
    
    private

    def initialize_paycheck
        @user = users(:one)
        sign_in @user
        @paycheck = paychecks(:one)
    end

end
