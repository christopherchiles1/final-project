(function(root) {
  'use strict';

  root.Dashboard = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar type="dashboard" />
          <div className="body container">
            <h2>Projects: </h2>
            <button type="button" className="btn btn-link pull-right">
              New Project
            </button>
            <ProjectsIndex>
              {this.props.children}
            </ProjectsIndex>
          </div>
        </div>
      );
    }
  });
}(this));
