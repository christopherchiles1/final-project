(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    PREVIEW: "PREVIEW",
    DETAIL: "DETAIL",
    FORM: "FORM",

    getInitialState: function () {
      return ({ status: this.PREVIEW });
    },

    getPreview: function () {
      this.setState({
        status: this.PREVIEW
      });
    },

    getDetail: function () {
      this.setState({
        status: this.DETAIL
      });
    },

    getFrom: function () {
      this.setState({
        status: this.FORM
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
              getPreview={this.getPreview}
              getForm={this.getForm} />
          );
          break;
        case this.FORM:
          view = (
            <TaskForm
              task={this.props.task}
              project={this.props.project}
              getPreview={this.getPreview}
              getForm={this.getForm} />
          );
          break;
      }

      return (
        <div>{ view }</div>
      );
    }
  });
}(this));
