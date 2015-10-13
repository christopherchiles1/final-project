(function(root) {
  'use strict';

  root.Dashboard = React.createClass({
    render: function () {
      return (
        <div className="dashboard">
          <Navbar type="dashboard" />
          <h1 class="dashboard-header">Projects:</h1>
          {this.props.children}
          <ProjectsIndex />
        </div>
      );
    }
  });

}(this));
