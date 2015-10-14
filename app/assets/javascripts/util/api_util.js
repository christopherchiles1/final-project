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
    }
  };
}(this));
