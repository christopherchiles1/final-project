(function(root) {
  'use strict';

  root.TasksListItem = React.createClass({
    getInitialState: function () {
      return ({
        detailed: false
      });
    },

    _toggleDetail: function () {
      this.setState({
        detailed: !this.state.detailed
      });
    },

    render: function () {
      return (
        <div onClick={this._toggleDetail}>
          {
            (this.state.detailed) ?
            <TaskDetail
              task={this.props.task}
              toggleDetail={this._toggleDetail} /> :
            <TaskItem
              task={this.props.task}
              toggleDetail={this._toggleDetail} />
          }
        </div>
      );
    }
  });
}(this));
