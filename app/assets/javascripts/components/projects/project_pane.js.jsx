(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    getInitialState: function () {
      return {
        tasks: TaskStore.projectTasks(this.props.project)
      };
    },

    componentDidMount: function () {
      TaskStore.addTaskChangeListener(this._onChange);
      TaskActions.fetchProjectTasks(this.props.project);
    },

    componentWillUnmount: function () {
      TaskStore.removeTaskChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
        tasks: TaskStore.projectTasks(this.props.project)
      });
    },

    render: function () {
      return (
        <div className="project-pane shadowed">
          <ProjectPaneHeader
            project={this.props.project}
            togglePane={this.props.togglePane}
            openModal={this.props.openModal} />
          <TasksList tasks={this.state.tasks} />
        </div>
      );
    }
  });
}(this));
