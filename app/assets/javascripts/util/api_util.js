(function(root) {
  'use strict';
  root.ApiUtil = {
    logoutUser: function () {
      $.ajax({
        url: '/session',
        type: 'DELETE',
        success: function () {
          window.location = '/';
        }
      });
    },

    fetchAllProjects: function () {
      $.ajax({
        url: '/api/projects',
        success: function (projects) {
          ProjectActions.receiveAllProjects(projects);
        }
      });
    },

    fetchSingleProject: function (id) {
      $.ajax({
        url: '/api/projects/' + id,
        success: function (project) {
          ProjectActions.receiveSingleProject(project);
        }
      });
    },

    createProject: function (project, callback) {
      $.ajax({
        url: 'api/projects',
        type: 'POST',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveSingleProject(project);
          if (callback) { callback(); }
        }
      });
    },

    updateProject: function (project) {
      $.ajax({
        url: 'api/projects/' + project.id,
        type: 'PATCH',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveSingleProject(project);
        }
      });
    },

    deleteProject: function (id) {
      $.ajax({
        url: 'api/projects/' + id,
        type: 'DELETE',
        success: function () {
          // TODO: deleteProject callback
        }
      });
    }
  };
}(this));
