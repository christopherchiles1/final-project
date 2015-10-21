(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    _logoutUser: function () {
      ApiActions.logoutUser();
    },

    render: function () {
      return (
        <nav className="navbar navbar-inverse custom">
          <div className="container-fluid custom">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed custom"
                data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
              <img src="logo(small).png" />
            </div>

            <div className="collapse navbar-collapse custom" id="navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right custom">
                <li className="dropdown custom">
                  <a className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button" aria-haspopup="true" aria-expanded="false">
                    {window.CURRENT_USER_USERNAME}
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a onClick={ApiUtil.logoutUser}>Log out</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-right custom" role="search">
                <div className="form-group group custom">
                  <input type="text" placeholder="Search Tasks" />
                  <button type="submit">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      );
    }
  });

}(this));
