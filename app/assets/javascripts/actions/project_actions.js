(function(root) {
  'use strict';

  root.ProjectActions = {
    // fetchProject: function (project) {
    //   ProjectUtil.fetchProject(project);
    // },
    //

    createProject: function (project, callback) {
      ProjectUtil.createProject(project, callback);
    },

    fetchUserProjects: function () {
      ProjectUtil.fetchUserProjects();
    },

    updateProject: function (project, callback) {
      ProjectUtil.updateProject(project, callback);
    },

    deleteProject: function (project, callback) {
      ProjectUtil.deleteProject(project, callback);
    },

    receiveUserProjects: function (projects) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECTS_RECEIVED,
        projects: projects
      });
    },

    receiveProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_RECEIVED,
        project: project
      });
    },
    
    removeProject: function (project) {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECT_REMOVED,
        project: project
      });
    }
  };
}(this));
