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
    }
  };
}(this));
