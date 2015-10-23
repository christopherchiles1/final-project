(function(root) {
  'use strict';

  root.TodoDetail = React.createClass({
    render: function () {
      return (
        <div className="todos-detail">
          {this.props.todo.body}
        </div>
      );
    }
  });
}(this));
