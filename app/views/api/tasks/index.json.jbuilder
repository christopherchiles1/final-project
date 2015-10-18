json.array!(@tasks) do |task|
  json.partial!('task', task: task, show_todos: false)
end
