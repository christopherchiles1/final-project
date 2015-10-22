(function(root) {
  'use strict';

  root.TaskPreview = React.createClass({
    getDetail: function (e) {
      e.preventDefault();
      this.props.getDetail();
    },

    render: function () {
      return (
        <div className="tasks-list-item truncated" onClick={this.getDetail}>
          { this.props.task.title }
        </div>
      );
    }
  });
}(this));
