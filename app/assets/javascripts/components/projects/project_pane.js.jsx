(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    getInitialState: function () {
      return {
        tasks: TaskStore.projectTasks(this.props.project),
        newTaskFormIsOpen: false
      };
    },

    openNewTaskForm: function () {
      this.setState({
        newTaskFormIsOpen: true
      });
    },

    closeNewTaskForm: function () {
      this.setState({
        newTaskFormIsOpen: false
      });
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
      var percent = 100 / this.props.count;
      var newTaskForm;
      if (this.state.newTaskFormIsOpen) {
        newTaskForm = (
          <TasksListItem
            form={true}
            project={this.props.project}
            closeNewTaskForm={this.closeNewTaskForm} />
        );
      }
      return (
        <div className="project-pane shadowed"
          style={{ width: "calc(" + percent + "% - 6px)" }}>
          <ProjectPaneHeader
            project={this.props.project}
            togglePane={this.props.togglePane}
            openModal={this.props.openModal}
            openNewTaskForm={this.openNewTaskForm} />
          <div className="project-pane-body">
            { newTaskForm }
            <TasksList tasks={this.state.tasks}
              project={this.props.project} />
          </div>
        </div>
      );
    }
  });
}(this));
