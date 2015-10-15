(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    _logoutUser: function () {
      ApiActions.logoutUser();
    },

    render: function () {
      // this.props.type is either 'dashboard' or 'workspace'
      // NOTE: Navbar is currently NOT rendering children.
      return (
        <div>
          <nav className="lt-navbar">
            <div className="container dashboard group">
              <div className="lt-navbar-left">
                Life Tracker
              </div>
              <ul className="lt-navbar-right">
                <div className="dropdown">
                  <div className="dropdown-toggle text-uppercase"
                    data-toggle="dropdown">
                    {CURRENT_USER_USERNAME}
                  </div>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li onClick={this._logoutUser}>
                      <a href="#">Sign out</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </nav>
          <div className="shift-down"></div>
        </div>
      );
    }
  });

}(this));
