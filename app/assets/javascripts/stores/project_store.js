(function(root) {
  'use strict';

  var PROJECT_CHANGE_EVENT = "PROJECT_CHANGE_EVENT";

  var _projects = [];

  var _resetProjects = function (projects) {
    _projects = projects;
  };

  var _updateProject = function (project) {
    var updateProject = _projects.find(function (p) {
      return p.id === project.id;
    });
    if (updateProject) {
      _projects.splice(_projects.indexOf(updateProject), 1, project);
    } else {
      _projects.push(project);
    }
  };

  var _removeProject = function (project) {
    var removeProject = _projects.find(function (p) {
      return p.id === project.id;
    });
    if (removeProject) {
      _projects.splice(_projects.indexOf(removeProject), 1);
    }
  };

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
    },

    visibleProjects: function () {
      return _projects.filter(function (project) {
        return project.visible;
      });
    },

    addProjectChangeListener: function (callback) {
      this.addListener(PROJECT_CHANGE_EVENT, callback);
    },

    removeProjectChangeListener: function (callback) {
      this.removeListener(PROJECT_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ProjectConstants.PROJECTS_RECEIVED:
          _resetProjects(payload.projects);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_RECEIVED:
          _updateProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_REMOVED:
          _removeProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
