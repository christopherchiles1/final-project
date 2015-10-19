(function(root) {
  'use strict';

  var CHANGE_EVENT = "CHANGE_EVENT";

  var _projects = {};

  var _resetProjects = function (projects) {
    projects.forEach(function (project) {
      _projects[project.id] = project;
    });
  };

  var _updateProject = function (project) {
    _projects[project.id] = project;
  };

  var _removeProject = function (project) {
    delete _projects[project.id];
  };

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects;
    },

    addProjectChangeListener: function (callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeProjectChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ProjectConstants.PROJECTS_RECEIVED:
          _resetProjects(payload.projects);
          ProjectStore.emit(CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_RECEIVED:
          _updateProject(payload.project);
          ProjectStore.emit(CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_REMOVED:
          _removeProject(payload.project);
          ProjectStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
