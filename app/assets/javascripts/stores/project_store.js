(function(root) {
  'use strict';

  var PROJECT_CHANGE_EVENT = "PROJECT_CHANGE_EVENT";

  var _projects = [];

  var _resetProjects = function (projects) {
    _projects = projects;
  };

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
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
      }
    })
  });
}(this));
