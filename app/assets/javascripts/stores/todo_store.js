(function(root) {
  'use strict';

  var TODO_CHANGE_EVENT = "TODO_CHANGE_EVENT";

  var _todos = [];

  var _resetTodos = function (todos) {
    _todos = todos;
  };

  var _updateTodo = function (todo) {
    var updateTodo = _todos.find(function (t) {
      return t.id === todo.id;
    });
    if (updateTodo) {
      _todos.splice(_todos.indexOf(updateTodo), 1, todo);
    } else {
      _todos.push(todo);
    }
  };

  var _removeTodo = function (todo) {
    var removeTodo = _todos.find(function (t) {
      return t.id === todo.id;
    });
    if (removeTodo) {
      _todos.splice(_todos.indexOf(removeTodo), 1);
    }
  };

  root.TodoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _todos.slice();
    },

    addTodoChangeListener: function (callback) {
      this.addListener(TODO_CHANGE_EVENT, callback);
    },

    removeTodoChangeListener: function (callback) {
      this.removeListener(TODO_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case TodoConstants.TODOS_RECEIVED:
          _resetTodos(payload.todos);
          TodoStore.emit(TODO_CHANGE_EVENT);
          break;
        case TodoConstants.TODO_RECEIVED:
          _updateTodo(payload.todo);
          TodoStore.emit(TODO_CHANGE_EVENT);
          break;
        case TodoConstants.TODO_REMOVED:
          _removeTodo(payload.todo);
          TodoStore.emit(TODO_CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
