(function(root) {
  'use strict';

  root.TodosListItem = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.todo) {
        return { body: this.props.todo.body, completed: this.props.todo.completed };
      } else {
        return { body: '', completed: false };
      }
    },

    toggleCompleted: function (e) {
      e.preventDefault();
      this.setState({ completed: !this.state.completed });
    },

    render: function () {
      var icon;
      var completed = "";
      if (this.props.todo) {
        if (this.state.completed) {
          icon = <span className="glyphicon glyphicon-ban-circle"></span>;
          completed="completed";
        } else {
          icon = <span className="glyphicon glyphicon-ok-circle"></span>;
        }
      }

      return (
        <div className={"todos-list-item group " + completed}>
          <div className="todo-checkbox" onClick={this.toggleCompleted}>
            { icon }
          </div>
          <input type="text" className="custom-input todo-input"
            valueLink={this.linkState("body")}
            placeholder="add a sub-task" />
        </div>
      );
    }
  });
}(this));
