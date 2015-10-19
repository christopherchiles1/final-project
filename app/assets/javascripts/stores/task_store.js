(function(root) {
  'use strict';

  var TASK_CHANGE_EVENT = "TASK_CHANGE_EVENT";

  var _tasks = {};

  var _resetTasks = function (project, tasks) {
    _tasks[project.id] = tasks;
  };

  var _updateTask = function (task) {
    var updateTask = _tasks[task.project_id].find(function (t) {
      return t.id === task.id;
    });
    if (updateTask) {
      _tasks[task.project_id].splice(_tasks.indexOf(updateTask), 1, task);
    } else {
      _tasks[task.project_id].push(task);
    }
  };

  var _removeTask = function (task) {
    var removeTask = _tasks[task.project_id].find(function (t) {
      return t.id === task.id;
    });
    if (removeTask) {
      _tasks[task.project_id].splice(_tasks[task.project_id].indexOf(removeTask), 1);
    }
  };

  root.TaskStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tasks;
    },

    projectTasks: function (project) {
      return _tasks[project.id] && _tasks[project.id].slice();
    },

    addTaskChangeListener: function (callback) {
      this.addListener(TASK_CHANGE_EVENT, callback);
    },

    removeTaskChangeListener: function (callback) {
      this.removeListener(TASK_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case TaskConstants.TASKS_RECEIVED:
          _resetTasks(payload.project, payload.tasks);
          TaskStore.emit(TASK_CHANGE_EVENT);
          break;
        case TaskConstants.TASK_RECEIVED:
          _updateTask(payload.task);
          TaskStore.emit(TASK_CHANGE_EVENT);
          break;
        case TaskConstants.TASK_REMOVED:
          _removeTask(payload.task);
          TaskStore.emit(TASK_CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
