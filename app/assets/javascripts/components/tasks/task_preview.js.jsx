(function(root) {
  'use strict';

  root.TaskPreview = React.createClass({
    getDetail: function (e) {
      e.preventDefault();
      this.props.getDetail();
    },

    completeTask: function (e) {
      TaskActions.deleteTask(this.props.task);
      e.stopPropagation();
    },

    render: function () {
      return (
        <div className="tasks-list-item group truncated hover-options" onClick={this.getDetail}>
          <div className="title">
            { this.props.task.title }
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-default" onClick={this.completeTask}>
              complete
            </button>
          </div>
        </div>
      );
    }
  });
}(this));
