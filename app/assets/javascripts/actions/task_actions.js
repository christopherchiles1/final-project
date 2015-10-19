(function(root) {
  'use strict';

  root.TaskActions = {
    fetchAllTasks: function (project) {
      TaskUtil.fetchAllTasks(project);
      // Dispatch an action to change view asynchronously here
    },

    receiveAllTasks: function (project, tasks) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASKS_RECEIVED,
        project: project,
        tasks: tasks
      });
    },

    fetchSingleTask: function (task) {
      TaskUtil.fetchSingleTask(task);
      // Dispatching here
    },

    receiveSingleTask: function (task) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASK_RECEIVED,
        task: task
      });
    },

    createTask: function (task, callback) {
      TaskUtil.createTask(task, callback);
      // Dispatching here
      // the api callback can use receiveSingleTask action
    },

    updateTask: function (task, callback) {
      TaskUtil.updateTask(task, callback);
      // Dispatching here
      // api callback can use receiveSingleTask action
    },

    deleteTask: function (task, callback) {
      TaskUtil.deleteTask(task, callback);
      // Dispatching here
    },

    removeSingleTask: function (task) {
      AppDispatcher.dispatch({
        actionType: TaskConstants.TASK_REMOVED,
        task: task
      });
    }
  };
}(this));
