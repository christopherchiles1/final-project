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

    editProject: function (e) {
      e.preventDefault();
      this.props.openModal.call(null, ProjectModal, this.props.project);
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      return (
        <div className="project-pane shadowed">
          <div className="project-pane-header group">
            <div className="project-pane-header title truncated">
              {this.props.project.title}
            </div>
            <div className="project-pane-header options btn-group"
              role="group">
              <button onClick={this.editProject}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button onClick={this.handleTogglePane}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <TasksList tasks={this.state.tasks} />
        </div>
      );
    }
  });
}(this));
