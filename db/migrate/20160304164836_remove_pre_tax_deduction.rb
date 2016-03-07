class RemovePreTaxDeduction < ActiveRecord::Migration
  def change
    remove_column :paycheck_deductions, :is_deducted_pre_tax;
  end
end
