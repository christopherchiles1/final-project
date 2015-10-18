(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    render: function () {
      return (
        <div className="tasks-list-item truncated">
            { this.props.task.title }
        </div>
      );
    }
  });
}(this));
