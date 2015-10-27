demo_user = User.create({username: 'demo', password: 'password' })

demo_user.projects.create!([
  {title: 'Finances', description: 'Pay bills and keep track of money!', visible: true},
  {title: 'Relaxation', description: 'A list of movies, shows, and other relaxing things to do', visible: true},
  {title: 'Education', description: 'Learn me a book.', visible: false}
])

demo_user.projects.where({title: 'Finances'}).first.tasks.create!([
  {title: 'Pay rent', description: 'Rent: $850, due on the 21st', deadline: '21 Nov 2015'},
  {title: 'Check balance of the savings account', description: ''}
])

demo_user.projects.where({title: 'Relaxation'}).first.tasks.create!([
  {title: 'Read a fiction book', description: ''},
  {title: 'Binge watch Rick and Morty', description: ''},
  {title: 'Feed some ducks', description: 'At Sutro Reservoir, San Francisco, CA 94131'}
])

demo_user.projects.where({title: 'Education'}).first.tasks.create!([
  {title: 'Task 3-1', description: 'Project 3 Task 1', deadline: Time.now},
  {title: 'Task 3-2', description: 'Project 3 Task 2 (deadlined)', deadline: Time.now},
  {title: 'Task 3-3', description: 'Project 3 Task 3'}
])

todos1 = Project.first.tasks.first.todos.create!([
  {body: 'Todo 1-1-1', completed: false},
  {body: 'Todo 1-1-2', completed: true},
  {body: 'Todo 1-1-3', completed: false}
])
