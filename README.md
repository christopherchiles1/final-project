# Life Tracker

[Life Tracker][heroku]

[heroku]: http://www.life-tracker.io

## Minimum Viable Product

Life Tracker is a life-management web application inspired by Pivotal Tracker
and built using Ruby on Rails and React.js.

Life Tracker allows users to:

- [ ] Create an account
- [ ] Log in and out
- [ ] Create, view, edit, and delete projects
- [ ] Toggle which project panes are open in the workspace
- [ ] Create, view, edit, and delete tasks and todos within each project
- [ ] Search for tasks through all projects

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Projects backend (1.5 days)

During Phase 1, I will implement user signup, login, and logout with associated
authentication (using BCrypt). I will have a user dashboard page after signup
which will hold the root React component. I will set up a full JSON API for
projects, and users will be able to get and post projects via the API.

[Details][phase-one]

### Phase 2: Flux Architecture and Project CRUD (2.5 days)

Phase 2 is focused on setting up Flux and React routing for the static page.
I will start by developing the Flux architecture for Projects, including the
Flux Dispatcher and Project Actions, Constants, ApiUtil methods, and Store. Then
I will create React views for the ProjectsIndex, ProjectsIndexItem, and
ProjectsForm. At the end of Phase 2, Projects can be created, viewed, edited and
destroyed from the Workspace. I will also add a Sidebar which will switch out
the panes displayed.

[Details][phase-two]

### Phase 3: The Project Workspace and Tasks (1.5 days)

Phase 3 focuses on developing the project workspace. I will implement Tasks
which can be added to a Project. I will implement React views for Tasks so that
they can be created and manipulated within a project pane.  Finally, I will add
a SearchForm and SearchPane component for searching through tasks.

[Details][phase-three]

### Phase 4: Get Todos working and Polish up the project so far (1.5 days)

In Phase 4, I will add todo items under each task so that a task can be broken
up into parts. I will build the React views and everything required to be able
to add todos to a task, and complete them. At this point, a lot of the of the
site should be functional (Projects, tasks, and todos CRUD). I will spend a
little time working with the CSS for my React components, and clean up the user
interface.

[Details][phase-four]

### Phase 5: Tags and Searching (1 days)

During Phase 5, I will implement tags that can be placed on tasks. I will also work on developing searching for tasks and tags, which will pull up a pane of tasks related to the search terms or to a tag.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

In Phase 6, I will make any final changes needed to the styling of my React views, and I will fill in seed data so that guest login will have projects and tasks filled in for demo purposes.

### Bonus Features (TBD)
- [ ] Drag and drop tasks between the Planned, Started, and Completed panes
- [ ] Allow Tasks to be timed (add a start, pause, and reset for tasks)
- [ ] View interactive charts of project progress
- [ ] Create, view, edit, and delete task-groups (using tags)
- [ ] Use keyboard shortcuts to manage their projects quickly

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
