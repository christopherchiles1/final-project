(function(root) {
  'use strict';

  root.TodoUtil = {
    fetchAllTodos: function (task) {
      $.ajax({
        url: '/api/tasks/' + task.id + '/todos',
        success: function (todos) {
          TodoActions.receiveAllTodos(task, todos);
        }
      });
    },

    fetchSingleTodo: function (todo) {
      $.ajax({
        url: '/api/todos/' + todo.id,
        success: function (todo) {
          TodoActions.receiveSingleTodo(todo);
        }
      });
    },

    createTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos',
        type: 'POST',
        data: { todo: todo },
        success: function (todo) {
          TodoActions.receiveSingleTodo(todo);
          if (callback) { callback(); }
        }
      });
    },

    updateTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos/' + todo.id,
        type: 'PATCH',
        data: { todo: todo },
        success: function (todo) {
          TodoActions.receiveSingleTodo(todo);
          if (callback) { callback(); }
        }
      });
    },

    deleteTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos/' + todo.id,
        type: 'DELETE',
        success: function () {
          TodoActions.removeSingleTodo(todo);
          if (callback) { callback(); }
        }
      });
    }
  };
}(this));
