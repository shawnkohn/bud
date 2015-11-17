class CreatePaychecks < ActiveRecord::Migration
  def change
    create_table :paychecks do |t|
      t.string :name
      t.decimal :amount, :precision => 12, :scale =>2
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
