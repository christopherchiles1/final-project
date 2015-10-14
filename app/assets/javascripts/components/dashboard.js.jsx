(function(root) {
  'use strict';

  root.Dashboard = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar type="dashboard" />
          <div className="container dashboard">
            <div className="row">
              <div className="col-xs-6">
                <div className="dashboard-header">Projects: </div>
              </div>
              <div className="col-xs-6">
                <a href="#/dashboard/new-project" className="pull-right">
                  New Project
                </a>
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
