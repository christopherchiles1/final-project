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
    }
  };
}(this));
