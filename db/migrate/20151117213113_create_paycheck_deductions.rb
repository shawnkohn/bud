class CreatePaycheckDeductions < ActiveRecord::Migration
  def change
    create_table :paycheck_deductions do |t|
      t.string :name
      t.decimal :amount, :precision => 12, :scale =>2
      t.references :paycheck, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
