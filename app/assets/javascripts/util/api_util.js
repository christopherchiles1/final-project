(function(root) {
  'use strict';
  root.ApiUtil = {
    fetchAllProjects: function () {
      $.ajax({
        url: "/api/projects",
        success: function (projects) {
          ProjectActions.receiveAllProjects(projects);
        }
      });
    }
  };
}(this));
