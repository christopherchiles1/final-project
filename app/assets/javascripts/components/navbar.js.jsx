(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    logoutUser: function () {
      ApiActions.logoutUser();
    },

    render: function () {
      return (
        <div className="nav-container">
          <nav className="lt-navbar">
            <div className="lt-navbar-left">
              <img className="lt-logo" src="logo(small).png" />
            </div>

            <div className="lt-navbar-left">
              <form className="lt-navbar-form">
                <div className="lt-form-group group">
                  <input type="text" placeholder="Search Tasks" />
                  <button type="submit">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </div>
              </form>
            </div>

            <div className="lt-navbar-right">
              <div className="dropdown lt-navbar-dropdown">
                <div className="dropdown-toggle"
                  data-toggle="dropdown">
                  {"Profile "}
                  <span className="caret"></span>
                </div>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-label">Logged in as {window.CURRENT_USER_USERNAME}</li>
                  <li><a onClick={this.logoutUser}>Log out</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });

}(this));
