(function(root) {
  'use strict';

  root.TaskUtil = {
    fetchProjectTasks: function (project) {
      $.ajax({
        url: '/api/projects/' + project.id + '/tasks',
        success: function (tasks) {
          TaskActions.receiveProjectTasks(project, tasks);
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    fetchTask: function (task) {
      $.ajax({
        url: '/api/tasks/' + task.id,
        success: function (task) {
          TaskActions.receiveTask(task);
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    createTask: function (task, callback) {
      $.ajax({
        url: 'api/projects/' + task.project_id + '/tasks',
        type: 'POST',
        data: { task: task },
        success: function (task) {
          TaskActions.receiveTask(task);
          if (callback) { callback(); }
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    updateTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks/' + task.id,
        type: 'PATCH',
        data: { task: task },
        success: function (task) {
          TaskActions.receiveTask(task);
          if (callback) { callback(); }
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    deleteTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks/' + task.id,
        type: 'DELETE',
        success: function () {
          TaskActions.removeTask(task);
          if (callback) { callback(); }
        },
        error: function (error) {
          alert(error);
        }
      });
    }
  };
}(this));
