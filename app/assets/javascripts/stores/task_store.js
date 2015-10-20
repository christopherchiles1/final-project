(function(root) {
  'use strict';

  var CHANGE_EVENT = "CHANGE_EVENT";

  var _tasks = {};

  var _resetTasks = function (project, tasks) {
    _tasks[project.id] = tasks;
  };

  var _resetTask = function (task) {
    var oldTask = find(task);
    if (oldTask) {
      _tasks[task.project_id].splice(_tasks.indexOf(oldTask), 1, task);
    } else {
      _tasks[task.project_id].push(task);
    }
  };

  var _removeTask = function (task) {
    var oldTask = find(task);
    if (oldTask) {
      _tasks[task.project_id].splice(_tasks[task.project_id].indexOf(oldTask), 1);
    }
  };

  var find = function (task) {
    return _tasks[task.project_id].find(function (t) {
      return t.id === task.id;
    });
  };

  root.TaskStore = $.extend({}, EventEmitter.prototype, {
    projectTasks: function (project) {
      if (_tasks[project.id]) {
        return _tasks[project.id].slice();
      } else {
        return [];
      }
    },

    addTaskChangeListener: function (callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeTaskChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case TaskConstants.TASKS_RECEIVED:
          _resetTasks(payload.project, payload.tasks);
          TaskStore.emit(CHANGE_EVENT);
          break;
        case TaskConstants.TASK_RECEIVED:
          _resetTask(payload.task);
          TaskStore.emit(CHANGE_EVENT);
          break;
        case TaskConstants.TASK_REMOVED:
          _removeTask(payload.task);
          TaskStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
