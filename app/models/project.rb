# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  visible     :boolean          not null
#

class Project < ActiveRecord::Base
  validates :user, :title, presence: true
  validates :visible, inclusion: [true, false]
  validates :description, length: { minimum: 0 }

  belongs_to :user
  has_many :tasks, dependent: :destroy
end
