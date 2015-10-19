(function(root) {
  'use strict';

  root.TodoActions = {
    fetchAllTodos: function (task) {
      TodoUtil.fetchAllTodos(task);
      // Dispatch an action to change view asynchronously here
    },

    receiveAllTodos: function (task, todos) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODOS_RECEIVED,
        todos: todos
      });
    },

    fetchSingleTodo: function (todo) {
      TodoUtil.fetchSingleTodo(todo);
      // Dispatching here
    },

    receiveSingleTodo: function (todo) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_RECEIVED,
        todo: todo
      });
    },

    createTodo: function (todo, callback) {
      TodoUtil.createTodo(todo, callback);
      // Dispatching here
      // the api callback can use receiveSingleTodo action
    },

    updateTodo: function (todo, callback) {
      TodoUtil.updateTodo(todo, callback);
      // Dispatching here
      // api callback can use receiveSingleTodo action
    },

    deleteTodo: function (todo, callback) {
      TodoUtil.deleteTodo(todo, callback);
      // Dispatching here
    },

    removeSingleTodo: function (todo) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_REMOVED,
        todo: todo
      });
    }
  };
}(this));
