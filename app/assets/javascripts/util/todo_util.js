(function(root) {
  'use strict';

  root.TodoUtil = {
    fetchTaskTodos: function (task) {
      $.ajax({
        url: '/api/tasks/' + task.id + '/todos',
        success: function (todos) {
          TodoActions.receiveTaskTodos(task, todos);
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    fetchTodo: function (todo) {
      $.ajax({
        url: '/api/todos/' + todo.id,
        success: function (todo) {
          TodoActions.receiveTodo(todo);
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    createTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos',
        type: 'POST',
        data: { todo: todo },
        success: function (todo) {
          TodoActions.receiveTodo(todo);
          if (callback) { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    updateTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos/' + todo.id,
        type: 'PATCH',
        data: { todo: todo },
        success: function (todo) {
          TodoActions.receiveTodo(todo);
          if (callback) { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    deleteTodo: function (todo, callback) {
      $.ajax({
        url: 'api/todos/' + todo.id,
        type: 'DELETE',
        success: function () {
          TodoActions.removeTodo(todo);
          if (callback) { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  };
}(this));
