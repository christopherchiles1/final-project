(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    render: function () {
      // this.props.type is either 'dashboard' or 'workspace'
      // NOTE: Navbar is currently NOT rendering children.
      return (
        <div className="navbar">
          <div>Logo Here</div>
          <div onClick={this._logoutUser}>{CURRENT_USER_USERNAME}</div>
        </div>
      );
    },

    _logoutUser: function () {
      ApiActions.logoutUser();
    }
  });

}(this));
