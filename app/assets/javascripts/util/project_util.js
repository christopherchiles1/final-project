(function(root) {
  'use strict';

  root.ProjectUtil = {
    fetchUserProjects: function () {
      $.ajax({
        url: '/api/projects',
        success: function (projects) {
          ProjectActions.receiveUserProjects(projects);
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    fetchProject: function (id) {
      $.ajax({
        url: '/api/projects/' + id,
        success: function (project) {
          ProjectActions.receiveProject(project);
        },
        error: function (error) {
          alert(error);
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
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    updateProject: function (id, callback) {
      $.ajax({
        url: 'api/projects/' + id,
        type: 'PATCH',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveSingleProject(project);
          if (callback) { callback(); }
        },
        error: function (error) {
          alert(error);
        }
      });
    },

    deleteProject: function (id, callback) {
      $.ajax({
        url: 'api/projects/' + id,
        type: 'DELETE',
        success: function () {
          ProjectActions.removeSingleProject(project);
          if (callback) { callback(); }
        },
        error: function (error) {
          alert(error);
        }
      });
    }
  };
}(this));
