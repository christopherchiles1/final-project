json.extract!(
  project,
  :id, :user_id, :title, :description, :visible, :created_at
)

if show_tasks
  json.tasks do
    json.array!(project.tasks) do |task|
      json.partial! 'tasks/task', task: task
    end
  end
end
