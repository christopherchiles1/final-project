# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  title       :string           not null
#  description :text             not null
#  deadline    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  validates :project, :title, presence: true
  validates :description, length: { minimum: 0 }

  belongs_to :project
  has_one :user, through: :project
  has_many :todos, dependent: :destroy
end
