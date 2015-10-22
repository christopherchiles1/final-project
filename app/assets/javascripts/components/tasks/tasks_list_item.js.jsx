(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    PREVIEW: "PREVIEW",
    DETAIL: "DETAIL",

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
