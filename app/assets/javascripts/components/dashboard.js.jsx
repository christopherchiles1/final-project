(function(root) {
  'use strict';

  root.Dashboard = React.createClass({
    render: function () {
      return (
        <div className="dashboard">
          <Navbar type="dashboard" />
          <div className="dashboard-content">
            <h1 className="dashboard-header">Projects:</h1>
            <ProjectsIndex>
              {this.props.children}
            </ProjectsIndex>
          </div>
        </div>
      );
    }
  });
}(this));
