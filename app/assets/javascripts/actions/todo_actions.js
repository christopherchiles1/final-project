(function(root) {
  'use strict';

  root.TodoActions = {
    fetchTaskTodos: function (task) {
      TodoUtil.fetchTaskTodos(task);
    },

    receiveTaskTodos: function (task, todos) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODOS_RECEIVED,
        task: task,
        todos: todos
      });
    },

    fetchTodo: function (todo) {
      TodoUtil.fetchTodo(todo);
    },

    receiveTodo: function (todo) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_RECEIVED,
        todo: todo
      });
    },

    createTodo: function (todo, callback) {
      TodoUtil.createTodo(todo, callback);
    },

    updateTodo: function (todo, callback) {
      TodoUtil.updateTodo(todo, callback);
    },

    deleteTodo: function (todo, callback) {
      TodoUtil.deleteTodo(todo, callback);
    },

    removeTodo: function (todo) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_REMOVED,
        todo: todo
      });
    }
  };
}(this));
