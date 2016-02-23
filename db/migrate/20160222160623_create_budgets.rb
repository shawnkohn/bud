class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.decimal :monthly_amount_for_financial_goals, :precision => 12, :scale => 2
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
