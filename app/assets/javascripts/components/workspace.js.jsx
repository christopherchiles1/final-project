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
      ProjectActions.fetchUserProjects();
    },

    componentWillUnmount: function () {
      ProjectStore.removeProjectChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
        projects: ProjectStore.all()
      });
    },

    togglePane: function (project) {
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
        <div className="workspace group">
          <Sidebar
            projects={this.state.projects}
            togglePane={this.togglePane}
            openModal={this.props.openModal} />
          <PaneArea
            projects={this._visibleProjects()}
            togglePane={this.togglePane}
            openModal={this.props.openModal} />
        </div>
      );
    }
  });
}(this));
