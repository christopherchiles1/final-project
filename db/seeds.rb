# # NOTE: This seed data will be obselete after randomizing demo users
# demo_user = User.create({username: 'demo', password: 'password' })
#
# demo_user.projects.create!([
#   {title: 'Finances', description: 'Pay bills and keep track of money!', visible: true},
#   {title: 'Relaxation', description: 'A list of movies, shows, and other relaxing things to do', visible: true},
#   {title: 'Education', description: 'Learn me a book.', visible: false}
# ])
#
# demo_user.projects.where({title: 'Finances'}).first.tasks.create!([
#   {title: 'Pay rent', description: 'Rent: $850, due on the 21st', deadline: '21 Nov 2015'},
#   {title: 'Check balance of the savings account', description: ''}
# ])
#
# demo_user.projects.where({title: 'Relaxation'}).first.tasks.create!([
#   {title: 'Read a fiction book', description: ''},
#   {title: 'Binge watch Rick and Morty', description: ''},
#   {title: 'Feed some ducks', description: 'At Sutro Reservoir, San Francisco, CA 94131'}
# ])
#
# demo_user.projects.where({title: 'Education'}).first.tasks.create!([
#   {title: 'Learn about Quantum Mechanics', description: ''},
#   {title: 'Read "Effective JavaScript"', description: ''}
# ])
#
# demo_user.projects.where({title: 'Education'}).first.tasks.first.todos.create!([
#   {body: 'Watch PBS Science youtube videos', completed: true},
#   {body: 'Find a good/readable science book on quantum science', completed: false}
# ])
