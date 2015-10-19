(function(root) {
  'use strict';

  root.TaskItem = React.createClass({
    render: function () {
      return (
        <div className="task-item truncated hover-options">
          { this.props.task.title }
          <span className="glyphicon glyphicon-chevron-down pull-right hover-option"
            aria-hidden="true"
            onClick={this.detailView}></span>
        </div>
      );
    }
  });
}(this));
