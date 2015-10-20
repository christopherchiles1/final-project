(function(root) {
  'use strict';

  root.ProjectUtil = {
    // NOTE: fetching a single project is never used.
    // TODO: Remove single project fetch, project#show, and associated route
    // fetchProject: function (project) {
    //   $.ajax({
    //     url: '/api/projects/' + project.id,
    //     success: function (project) {
    //       ProjectActions.receiveProject(project);
    //     },
    //     error: function (error) {
    //       console.log(error);
    //     }
    //   });
    // },

    createProject: function (project, callback) {
      $.ajax({
        url: 'api/projects',
        type: 'POST',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveProject(project);
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    fetchUserProjects: function () {
      $.ajax({
        url: '/api/projects',
        success: function (projects) {
          ProjectActions.receiveUserProjects(projects);
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    updateProject: function (project, callback) {
      $.ajax({
        url: 'api/projects/' + project.id,
        type: 'PATCH',
        data: { project: project },
        success: function (project) {
          ProjectActions.receiveProject(project);
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    },

    deleteProject: function (project, callback) {
      $.ajax({
        url: 'api/projects/' + project.id,
        type: 'DELETE',
        success: function () {
          ProjectActions.removeProject(project);
          if (typeof callback === 'function') { callback(); }
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  };
}(this));
