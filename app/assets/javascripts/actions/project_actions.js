(function(root) {
  'use strict';

  root.ProjectActions = {
    fetchUserProjects: function () {
      ProjectUtil.fetchUserProjects();
    },

    receiveUserProjects: function (projects) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECTS_RECEIVED,
        projects: projects
      });
    },

    fetchProject: function (project) {
      ProjectUtil.fetchProject(project);
    },

    receiveSingleProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_RECEIVED,
        project: project
      });
    },

    createProject: function (project, callback) {
      ProjectUtil.createProject(project, callback);
    },

    updateProject: function (project, callback) {
      ProjectUtil.updateProject(project, callback);
    },

    deleteProject: function (project, callback) {
      ProjectUtil.deleteProject(project, callback);
    },

    removeSingleProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_REMOVED,
        project: project
      });
    }
  };
}(this));
