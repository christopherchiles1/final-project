(function(root) {
  'use strict';

  root.Workspace = React.createClass({
    getInitialState: function () {
      return {
        projects: ProjectStore.all()
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
        projects: ProjectStore.all()
      });
    },

    _togglePane: function (project) {
      ProjectActions.updateProject({
        id: project.id,
        visible: !project.visible
      });
    },

    _visibleProjects:function () {
      return this.state.projects.filter(function (project) {
        return project.visible;
      });
    },

    render: function () {
      return (
        <div className="workspace container-fluid">
          <div className="row tall">
            <div className="col-xs-2 tall nopadding">
              <Sidebar
                projects={ this.state.projects }
                togglePane={this._togglePane}
                openProjectForm={this.props.openProjectForm}
                openProjectDelete={this.props.openProjectDelete} />
            </div>
            <div className="col-xs-10 tall nopadding">
              <PaneArea projects={ this._visibleProjects() }
                togglePane={this._togglePane}
                openProjectForm={this.props.openProjectForm} />
            </div>
          </div>
        </div>
      );
    }
  });
}(this));
