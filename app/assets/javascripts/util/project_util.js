(function(root) {
  'use strict';

  root.ProjectUtil = {
    fetchAllProjects: function () {
      $.ajax({
        url: '/api/projects',
        success: function (projects) {
          ProjectActions.receiveAllProjects(projects);
        }
      });
    },

    fetchSingleProject: function (project) {
      $.ajax({
        url: '/api/projects/' + project.id,
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

    updateProject: function (project, callback) {
      $.ajax({
        url: 'api/projects/' + project.id,
        type: 'PATCH',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveSingleProject(project);
          if (callback) { callback(); }
        }
      });
    },

    deleteProject: function (project, callback) {
      $.ajax({
        url: 'api/projects/' + project.id,
        type: 'DELETE',
        success: function () {
          ProjectActions.removeSingleProject(project);
          if (callback) { callback(); }
        }
      });
    }
  };
}(this));
