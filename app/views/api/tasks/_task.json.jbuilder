json.extract!(
  task,
  :id, :project_id, :title, :description, :deadline
)

json.todos do
  json.array!(task.todos) do |todo|
    json.partial! 'api/todos/todo', todo: todo
  end
end
