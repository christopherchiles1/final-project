(function(root) {
  'use strict';

  root.TodosListItem = React.createClass({
    DETAIL: "DETAIL",
    FORM: "FORM",

    getInitialState: function () {
      return ({ status: this.DETAIL });
    },

    getDetail: function () {
      this.setState({ status: this.DETAIL });
    },

    getForm: function () {
      this.setState({ status: this.FORM });
    },

    render: function () {
      var view;
      switch (this.state.status) {
        case this.FORM:
          view = (
            <TodoForm
              todo={this.props.todo}
              getDetail={this.getDetail} />
          );
          break;
        case this.DETAIL:
          view = (
            <TodoDetail
              todo={this.props.todo}
              getPreview={this.getForm} />
          );
          break;
      }

      return (
        <div className="todos-list-item" key={this.props.todo.id}>
          {view}
        </div>
      );
    }
  });
}(this));
