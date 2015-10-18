(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    getInitialState: function () {
      return {
        tasks: TaskStore.findByProject(this.props.project)
      };
    },

    componentDidMount: function () {
      TaskStore.addTaskChangeListener(this._onChange);
      TaskActions.fetchTasksbyProject(this.props.project);
    },

    componentWillUnmount: function () {
      TaskStore.removeTaskChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({
        tasks: TaskStore.findByProject(this.props.project)
      });
    },

    handleOpenProjectForm: function (e) {
      e.preventDefault();
      this.props.openProjectForm.call(null, this.props.project);
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      var percent = 100 / this.props.count;
      return (
        <div className="project-pane shadowed">
          <div className="project-pane-header group">
            <div className="project-pane-header title truncated">
              {this.props.project.title}
            </div>
            <div className="project-pane-header options btn-group"
              role="group">
              <button onClick={this.handleOpenProjectForm}>
                <span className="glyphicon glyphicon-pencil transparent" aria-hidden="true"></span>
              </button>
              <button onClick={this.handleTogglePane}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="tasks-list">
            {
              this.state.tasks.map(function (task) {
                return (
                  <TasksListItem
                    task={task}/>
                 );
              }.bind(this))
            }
          </div>
        </div>
      );
    }
  });
}(this));
