json.extract!(
  project,
  :id, :project_id, :title, :description, :deadline
)

if show_todos
  json.todos do
    json.array! do
      json.partial! 'todos/todo', todo: todo
    end
  end
end
