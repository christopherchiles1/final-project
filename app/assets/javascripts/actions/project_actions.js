(function(root) {
  'use strict';

  root.ProjectActions = {
    fetchAllProjects: function () {
      ApiUtil.fetchAllProjects();
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

    fetchSingleProject: function (id) {
      ApiUtil.fetchSingleProject(id);
      // Dispatching here
    },

    receiveSingleProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_RECEIVED,
        project: project
      });
    },

    createProject: function (project, callback) {
      ApiUtil.createProject(project, callback);
      // Dispatching here
      // the api callback can use receiveSingleProject action
    },

    updateProject: function (project, callback) {
      ApiUtil.updateProject(project, callback);
      // Dispatching here
      // api callback can use receiveSingleProject action
    },

    deleteProject: function (id) {
      ApiUtil.deleteProject(id);
      // Dispatching here
    }
  };
}(this));
