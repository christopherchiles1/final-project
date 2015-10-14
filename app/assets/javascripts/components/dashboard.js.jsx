(function(root) {
  'use strict';

  root.Dashboard = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar type="dashboard" />
          <div className="container dashboard">
            <div className="row page-header">
              <div className="col-xs-6">
                <h4>Projects: </h4>
              </div>
              <div className="col-xs-6">
                <button type="button" className="btn btn-link pull-right">
                  New Project
                </button>
              </div>
            </div>
            <ProjectsIndex>
              {this.props.children}
            </ProjectsIndex>
          </div>
        </div>
      );
    }
  });
}(this));
