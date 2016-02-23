class Paycheck < ActiveRecord::Base
  belongs_to :budget

  has_many :paycheck_deductions

  def as_json(options = {})
      super(options.merge(include: :paycheck_deductions))
  end

end
