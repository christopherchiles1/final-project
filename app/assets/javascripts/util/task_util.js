(function(root) {
  'use strict';

  root.TaskUtil = {
    fetchAllTasks: function () {
      $.ajax({
        url: '/api/tasks',
        success: function (tasks) {
          TaskActions.receiveAllTasks(tasks);
        }
      });
    },

    fetchSingleTask: function (task) {
      $.ajax({
        url: '/api/tasks/' + task.id,
        success: function (task) {
          TaskActions.receiveSingleTask(task);
        }
      });
    },

    createTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks',
        type: 'POST',
        data: { task: task },
        success: function (task) {
          TaskActions.receiveSingleTask(task);
          if (callback) { callback(); }
        }
      });
    },

    updateTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks/' + task.id,
        type: 'PATCH',
        data: { task: task },
        success: function (task) {
          TaskActions.receiveSingleTask(task);
          if (callback) { callback(); }
        }
      });
    },

    deleteTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks/' + task.id,
        type: 'DELETE',
        success: function () {
          TaskActions.removeSingleTask(task);
          if (callback) { callback(); }
        }
      });
    }
  };
}(this));
