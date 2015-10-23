(function(root) {
  'use strict';

  root.TodosList = React.createClass({
    render: function () {
      return (
        <div className="todos-list">
          Checklist:
          {
            this.props.todos.map(function (todo, idx) {
              return <TodosListItem key={idx} idx={idx} todo={todo}
                updateTodos={this.props.updateTodos} />;
            }.bind(this))
          }
          <TodosListItem
            key={this.props.todos.length}
            idx={this.props.todos.length}
            updateTodos={this.props.updateTodos} />
        </div>
      );
    }
  });
}(this));
