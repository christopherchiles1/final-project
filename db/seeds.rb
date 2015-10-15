# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.create({username: 'demo', password: 'password1' })
projects = User.first.projects.create!([
  {title: 'Project 1', description: '', ord: 1, visible: true},
  {title: 'Project 2', description: '', ord: 2, visible: true},
  {title: 'Project 3', description: '', ord: 3, visible: false},
])
