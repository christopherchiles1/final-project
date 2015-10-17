class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.date :deadline

      t.timestamps null: false
    end

    add_index :tasks, :project_id
  end
end
