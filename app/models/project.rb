# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  validates :user, :title, :ord, presence: true
  validates :description, length: { minimum: 0 }

  belongs_to :user
end
