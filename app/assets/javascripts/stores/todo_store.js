(function(root) {
  'use strict';

  var CHANGE_EVENT = "CHANGE_EVENT";

  var _todos = {};

  var _resetTodos = function (task, todos) {
    _todos[task.id] = todos;
  };

  var _updateTodo = function (todo) {
    var updateTodo = _todos[todo.task_id].find(function (t) {
      return t.id === todo.id;
    });
    if (updateTodo) {
      _todos[todo.task_id].splice(_todos[todo.task_id].indexOf(updateTodo), 1, todo);
    } else {
      _todos[todo.task_id].push(todo);
    }
  };

  var _removeTodo = function (todo) {
    var removeTodo = _todos[todo.task_id].find(function (t) {
      return t.id === todo.id;
    });
    if (removeTodo) {
      _todos[todo.task_id].splice(_todos[todo.task_id].indexOf(removeTodo), 1);
    }
  };

  root.TodoStore = $.extend({}, EventEmitter.prototype, {
    taskTodos: function (task) {
      if (_todos[task.id]) {
        return _todos[task.id].slice();
      } else {
        return [];
      }
    },

    addTodoChangeListener: function (callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeTodoChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case TodoConstants.TODOS_RECEIVED:
          _resetTodos(payload.task, payload.todos);
          TodoStore.emit(CHANGE_EVENT);
          break;
        case TodoConstants.TODO_RECEIVED:
          _updateTodo(payload.todo);
          TodoStore.emit(CHANGE_EVENT);
          break;
        case TodoConstants.TODO_REMOVED:
          _removeTodo(payload.todo);
          TodoStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
