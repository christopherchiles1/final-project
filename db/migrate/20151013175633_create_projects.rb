class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :ord, null: false

      t.timestamps null: false
    end

    add_index :projects, :user_id
  end
end
