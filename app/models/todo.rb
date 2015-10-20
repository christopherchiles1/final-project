# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  task_id    :integer          not null
#  completed  :boolean          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ActiveRecord::Base
  validates :task, :body, presence: true
  validates :completed, inclusion: [true, false]

  belongs_to :task, inverse_of: :todos
  has_one :project, through: :task
  has_one :user, through: :task
end
