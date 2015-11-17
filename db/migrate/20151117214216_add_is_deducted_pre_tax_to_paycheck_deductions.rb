class AddIsDeductedPreTaxToPaycheckDeductions < ActiveRecord::Migration
  def change
    add_column :paycheck_deductions, :is_deducted_pre_tax, :boolean
    add_index :paycheck_deductions, :is_deducted_pre_tax
  end
end
