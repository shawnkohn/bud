class RemoveUserFromPaychecks < ActiveRecord::Migration
  def change
    remove_reference :paychecks, :user, index: true, foreign_key: true
  end
end
