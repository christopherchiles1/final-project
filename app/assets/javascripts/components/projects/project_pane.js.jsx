(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    getInitialState: function () {
      return { tasks: [] };
      // return {
      //   tasks: TaskStore.projectTasks(this.props.project),
      //   newTaskFormIsOpen: false
      // };
    },
    //
    // openNewTaskForm: function () {
    //   this.setState({
    //     newTaskFormIsOpen: true
    //   });
    // },
    //
    // closeNewTaskForm: function () {
    //   this.setState({
    //     newTaskFormIsOpen: false
    //   });
    // },
    //
    // componentDidMount: function () {
    //   TaskStore.addTaskChangeListener(this._onChange);
    //   TaskActions.fetchProjectTasks(this.props.project);
    // },
    //
    // componentWillUnmount: function () {
    //   TaskStore.removeTaskChangeListener(this._onChange);
    // },
    //
    // _onChange: function () {
    //   this.setState({
    //     tasks: TaskStore.projectTasks(this.props.project)
    //   });
    // },

    render: function () {
      var newTaskForm;
      // if (this.state.newTaskFormIsOpen) {
      //   newTaskForm = (
      //     <TaskDetail />
      //   );
      // }
      return (
        <div className="project-pane shadowed">
          <ProjectPaneHeader
            project={this.props.project}
            togglePane={this.props.togglePane}
            openModal={this.props.openModal}
            openNewTaskForm={this.openNewTaskForm} />
          { newTaskForm }
          <TasksList tasks={this.state.tasks} />
        </div>
      );
    }
  });
}(this));
