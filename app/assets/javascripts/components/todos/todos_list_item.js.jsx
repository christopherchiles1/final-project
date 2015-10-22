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

    getFrom: function () {
      this.setState({ status: this.FORM });
    },

    render: function () {
      return (
        <div className="todos-list-item"></div>
      );
    }
  });
}(this));
