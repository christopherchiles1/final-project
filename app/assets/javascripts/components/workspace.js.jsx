(function(root) {
  'use strict';

  root.Workspace = React.createClass({
    getInitialState: function () {
      return {
        projects: ProjectStore.all(),
        visibleProjects: ProjectStore.visibleProjects()
      };
    },

    componentDidMount: function () {
      ProjectStore.addProjectChangeListener(this._onChange);
      ProjectActions.fetchAllProjects();
    },

    componentWillUnmount: function () {
      ProjectStore.removeProjectChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
        projects: ProjectStore.all(),
        visibleProjects: ProjectStore.visibleProjects()
      });
    },

    _togglePane: function (project, e) {
      ProjectActions.updateProject({
        id: project.id,
        visible: !project.visible
      });
    },

    render: function () {
      return (
        <div className="container-fluid workspace">
          <div className="row">
            <div className="col-xs-2 nopadding">
              <Sidebar
                projects={ this.state.projects }
                togglePane={this._togglePane}
                openModal={this.props.openModal} />
            </div>
            <div className="row col-xs-10 nopadding">
              <PaneArea projects={ this.state.visibleProjects }
                togglePane={this._togglePane} />
            </div>
          </div>
        </div>
      );
    }
  });
}(this));
