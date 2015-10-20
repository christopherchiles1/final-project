user = User.create({username: 'demo', password: 'password' })

projects = User.first.projects.create!([
  {title: 'Project 1', description: 'Project description 1', visible: true},
  {title: 'Project 2', description: 'Project description 2', visible: true},
  {title: 'Project 3', description: 'Project description 3', visible: false}
])

tasks1 = Project.find(1).tasks.create!([
  {title: 'Task 1-1', description: 'Project 1 Task 1 (deadlined)', deadline: Date.new},
  {title: 'Task 1-2', description: 'Project 1 Task 2'},
  {title: 'Task 1-3', description: 'Project 1 Task 3'}
])

todos1 = Project.first.tasks.first.todos.create!([
  {body: 'Todo 1-1-1', completed: false},
  {body: 'Todo 1-2-1', completed: true},
  {body: 'Todo 1-2-2', completed: false}
])

tasks2 = Project.find(2).tasks.create!([
  {title: 'Task 2-1', description: 'Project 2 Task 1'},
  {title: 'Task 2-2', description: 'Project 2 Task 2 (deadlined)', deadline: Date.new},
  {title: 'Task 2-3', description: 'Project 2 Task 3'}
])

tasks3 = Project.find(3).tasks.create!([
  {title: 'Task 3-1', description: 'Project 3 Task 1 (deadlined)', deadline: Date.new},
  {title: 'Task 3-2', description: 'Project 3 Task 2 (deadlined)', deadline: Date.new},
  {title: 'Task 3-3', description: 'Project 3 Task 3'}
])
