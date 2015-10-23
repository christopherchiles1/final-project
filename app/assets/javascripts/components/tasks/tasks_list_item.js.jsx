(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    PREVIEW: "PREVIEW",
    DETAIL: "DETAIL",

    getInitialState: function () {
      if (this.props.detail) {
        return ({ status: this.DETAIL });
      } else {
        return ({ status: this.PREVIEW });
      }
    },

    getPreview: function () {
      if (this.props.detail) {
        this.props.closeNewTaskForm();
      } else {
        this.setState({
          status: this.PREVIEW
        });
      }
    },

    getDetail: function () {
      this.setState({
        status: this.DETAIL
      });
    },

    render: function () {
      var view;
      switch (this.state.status) {
        case this.PREVIEW:
          view = (
            <TaskPreview
              task={this.props.task}
              getDetail={this.getDetail} />
          );
          break;
        case this.DETAIL:
          view = (
            <TaskDetail
              task={this.props.task}
              project={this.props.project}
              getPreview={this.getPreview} />
          );
          break;
      }

      return (
        <div>{ view }</div>
      );
    }
  });
}(this));
