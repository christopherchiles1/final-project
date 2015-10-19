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
      TaskActions.fetchAllTasks(this.props.project);
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
      var taskList;
      if (this.state.tasks) {
        taskList = this.state.tasks.map(function (task) {
          return (
            <TasksListItem
              key={task.id}
              task={task}/>
           );
        }.bind(this));
      } else {
        taskList = <div className="tasks-list empty"></div>;
      }

      return (
        <div className="project-pane shadowed">
          <div className="project-pane-header group">
            <div className="project-pane-header title truncated">
              {this.props.project.title}
            </div>
            <div className="project-pane-header options btn-group"
              role="group">
              <button onClick={this.editProject}>
                <span className="glyphicon glyphicon-pencil transparent" aria-hidden="true"></span>
              </button>
              <button onClick={this.handleTogglePane}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="tasks-list">
            {taskList}
          </div>
        </div>
      );
    }
  });
}(this));
