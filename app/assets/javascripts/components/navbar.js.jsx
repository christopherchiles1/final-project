(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    render: function () {
      // this.props.type is either 'dashboard' or 'workspace'
      // NOTE: Navbar is currently NOT rendering children.
      return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Life Tracker</a>
              </div>{/* .navbar-header */}
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle"
                    data-toggle="dropdown">
                    {CURRENT_USER_USERNAME}
                  </a>
                  <ul className="dropdown-menu">
                    <li onClick={this._logoutUser}>
                      <a href="#">Sign out</a>
                    </li>
                  </ul>
                </li>
              </ul>{/* .navbar-nav */}
            </div>{/* .container-fluid */}
          </nav>
          <nav className="navbar navbar-default"></nav>
        </div>
      );
    },

    _logoutUser: function () {
      ApiActions.logoutUser();
    }
  });

}(this));
