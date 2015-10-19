(function(root) {
  'use strict';

  root.TaskActions = {
    fetchProjectTasks: function (project) {
      TaskUtil.fetchProjectTasks(project);
    },

    receiveProjectTasks: function (project, tasks) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASKS_RECEIVED,
        project: project,
        tasks: tasks
      });
    },

    fetchTask: function (task) {
      TaskUtil.fetchTask(task);
    },

    receiveTask: function (task) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASK_RECEIVED,
        task: task
      });
    },

    createTask: function (task, callback) {
      TaskUtil.createTask(task, callback);
    },

    updateTask: function (task, callback) {
      TaskUtil.updateTask(task, callback);
    },

    deleteTask: function (task, callback) {
      TaskUtil.deleteTask(task, callback);
    },

    removeTask: function (task) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASK_REMOVED,
        task: task
      });
    }
  };
}(this));
