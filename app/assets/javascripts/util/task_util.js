(function(root) {
  'use strict';

  root.TaskUtil = {
    // NOTE: fetching a single task is never used.
    // TODO: Remove single task fetch, task#show, and associated route
    // fetchTask: function (task) {
    //   $.ajax({
    //     url: '/api/tasks/' + task.id,
    //     success: function (task) {
    //       TaskActions.receiveTask(task);
    //     },
    //     error: function (error) {
    //       console.log(error);
    //     }
    //   });
    // },

    createTask: function (task, callback) {
      $.ajax({
        url: 'api/projects/' + task.project_id + '/tasks',
        type: 'POST',
        data: { task: task },
        success: function (task) {
          TaskActions.receiveTask(task);
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    fetchProjectTasks: function (project) {
      $.ajax({
        url: '/api/projects/' + project.id + '/tasks',
        success: function (tasks) {
          TaskActions.receiveProjectTasks(project, tasks);
        },
        error: function (error) {
          console.log(error);
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
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    deleteTask: function (task, callback) {
      $.ajax({
        url: 'api/tasks/' + task.id,
        type: 'DELETE',
        success: function () {
          TaskActions.removeTask(task);
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  };
}(this));
