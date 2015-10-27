(function(root) {
  'use strict';

  var CHANGE_EVENT = "CHANGE_EVENT";

  var _projects = [];

  var _resetProjects = function (projects) {
    _projects = projects;
  };

  var _resetProject = function (project) {
    var oldProject = find(project);
    if (oldProject) {
      _projects.splice(_projects.indexOf(oldProject), 1, project);
    } else {
      _projects.push(project);
    }
  };

  var _removeProject = function (project) {
    var oldProject = find(project);
    if (oldProject) {
      _projects.splice(_projects.indexOf(oldProject), 1);
    }
  };

  var find = function (project) {
    var oldProject;
  _projects.forEach(function (p) {
      if (p.id === project.id) {
        oldProject = p;
      }
    });
    return oldProject;
  };

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
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
          _resetProject(payload.project);
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
