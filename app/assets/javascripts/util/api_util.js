(function(root) {
  'use strict';
  root.ApiUtil = {
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
