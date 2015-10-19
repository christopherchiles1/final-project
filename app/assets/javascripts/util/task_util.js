(function(root) {
  'use strict';

  root.TaskUtil = {
    // Grabs all tasks for a project, returns project and tasks
    fetchAllTasks: function (project) {
      $.ajax({
        url: '/api/projects/' + project.id + '/tasks',
        success: function (tasks) {
          TaskActions.receiveAllTasks(project, tasks);
        }
      });
    },

    fetchSingleTask: function (task) {
      $.ajax({
        url: '/api/projects/' + task.project_id + '/tasks/' + task.id,
        success: function (task) {
          TaskActions.receiveSingleTask(task);
        }
      });
    },

    createTask: function (task, callback) {
      $.ajax({
        url: 'api/projects/' + task.project_id + '/tasks',
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
        url: 'api/projects/' + task.project_id + '/tasks/' + task.id,
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
        url: 'api/projects/' + task.project_id + '/tasks/' + task.id,
        type: 'DELETE',
        success: function () {
          TaskActions.removeSingleTask(task);
          if (callback) { callback(); }
        }
      });
    }
  };
}(this));
