(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    getInitialState: function () {
      if (this.props.form) {
        return({ detailed: true });
      } else {
        return ({ detailed: false });
      }
    },

    _toggleDetail: function () {
      if (this.props.form) {
        this.props.closeNewTaskForm();
      } else {
        this.setState({
          detailed: !this.state.detailed
        });
      }
    },

    render: function () {
      return (
        <div>
          {
            (this.state.detailed) ?
            <TaskDetail
              task={this.props.task}
              project={this.props.project}
              closeNewTaskForm={this.props.closeNewTaskForm}
              toggleDetail={this._toggleDetail} /> :
            <TaskItem
              task={this.props.task}
              toggleDetail={this._toggleDetail} />
          }
        </div>
      );
    }
  });
}(this));
