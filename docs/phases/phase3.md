# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Tasks

### Controllers
* Api::TasksController (create, destroy, index, show, update)

### Views
* tasks/index.json.jbuilder
* tasks/show.json.jbuilder

## Flux
### Views (React Components)
* Workspace
* SearchForm
* ProjectSidebar
* TasksIndex
  * TasksForm
  * TasksIndexItem
* SearchIndex

### Stores
* Task

### Actions
* ApiActions.receiveProjectTasks
* ApiActions.receiveTask
* ApiActions.deleteTask

### ApiUtil
* ApiUtil.fetchProjectTasks
* ApiUtil.fetchTask
* ApiUtil.createTask
* ApiUtil.editTask
* ApiUtil.destroyTask

## Gems/Libraries
