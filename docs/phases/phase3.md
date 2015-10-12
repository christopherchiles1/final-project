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
* ProjectHeader
* ProjectSidebar
* TasksForm
* TasksIndex
  * TasksIndexItem
* SearchIndex

### Stores
* Task

### Actions
* ApiActions.receiveAllTasks
* ApiActions.receiveSingleTask
* ApiActions.deleteTask

### ApiUtil
* ApiUtil.fetchAllTasks
* ApiUtil.fetchSingleTask
* ApiUtil.createTask
* ApiUtil.editTask
* ApiUtil.destroyTask

## Gems/Libraries
