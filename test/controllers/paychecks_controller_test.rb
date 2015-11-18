require 'test_helper'

class PaychecksControllerTest < ActionController::TestCase

    include Devise::TestHelpers

    setup :initialize_paycheck
    
    test "should get index" do
        get :index, :format => :json, user_id: @user
        assert_response :success
    end


    private

    def initialize_paycheck
        @user = users(:one)
        sign_in @user
        @paycheck = paychecks(:one)
    end

end
