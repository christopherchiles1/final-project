# Phase 4: Get Todos working and Polish up the project so far (1 day)

## Rails
### Models
  * Todos

### Controllers
  * Api::TodosController (create, destroy, index, show, update)

### Views
  * todos/index.json.jbuilder
  * todos/show.json.jbuilder

## Flux
### Views (React Components)
  * TodosForm
  * TodosIndex
    * TodosIndexItem

### Actions
  * ApiActions.receiveAllTodos
  * ApiActions.receiveSingleTodo
  * ApiActions.deleteTodo

### ApiUtil
  * ApiUtil.fetchAllTodos
  * ApiUtil.fetchSingleTodo
  * ApiUtil.createTodo
  * ApiUtil.editTodo
  * ApiUtil.destroyTodo

## Gems/Libraries
