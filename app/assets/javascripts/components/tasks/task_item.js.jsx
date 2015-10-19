(function(root) {
  'use strict';

  root.TaskItem = React.createClass({
    render: function () {
      return (
        <div className="task-item truncated">
            { this.props.task.title }
        </div>
      );
    }
  });
}(this));
