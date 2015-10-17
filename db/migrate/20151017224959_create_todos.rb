class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :task_id, null: false
      t.boolean :completed, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
    
    add_index :todos, :task_id
  end
end
