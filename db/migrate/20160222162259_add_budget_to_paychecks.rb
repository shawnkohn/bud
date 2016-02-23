class AddBudgetToPaychecks < ActiveRecord::Migration
  def change
    add_reference :paychecks, :budget, index: true, foreign_key: true
  end
end
