(function(root) {
  'use strict';

  root.NavbarDev = React.createClass({
    _logoutUser: function () {
      ApiActions.logoutUser();
    },

    render: function () {
      return (
        <div className="dev-navbar">
        </div>
      );
    }
  });

}(this));
