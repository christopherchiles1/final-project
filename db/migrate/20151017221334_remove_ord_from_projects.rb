class RemoveOrdFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :ord
  end
end
