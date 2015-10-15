(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    _logoutUser: function () {
      ApiActions.logoutUser();
    },

    render: function () {
      return (
        <div className="navbar-div">
        </div>
      );
    }
  });

}(this));
