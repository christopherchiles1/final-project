(function(root) {
  'use strict';

  root.ProjectActions = {
    fetchAllProjects: function () {
      ProjectUtil.fetchAllProjects();
      // Dispatch an action to change view asynchronously here
      // On fetch success, receiveAllProjects will run and change view again
      // On fetch fail, another event will run to fix the asynch view change
    },

    receiveAllProjects: function (projects) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECTS_RECEIVED,
        projects: projects
      });
    },

    fetchSingleProject: function (project) {
      ProjectUtil.fetchSingleProject(project);
      // Dispatching here
    },

    receiveSingleProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_RECEIVED,
        project: project
      });
    },

    createProject: function (project, callback) {
      ProjectUtil.createProject(project, callback);
      // Dispatching here
      // the api callback can use receiveSingleProject action
    },

    updateProject: function (project, callback) {
      ProjectUtil.updateProject(project, callback);
      // Dispatching here
      // api callback can use receiveSingleProject action
    },

    deleteProject: function (project, callback) {
      ProjectUtil.deleteProject(project, callback);
      // Dispatching here
    },

    removeSingleProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_REMOVED,
        project: project
      });
    }
  };
}(this));
