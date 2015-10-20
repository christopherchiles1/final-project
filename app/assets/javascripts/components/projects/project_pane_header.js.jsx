(function(root) {
  'use strict';

  root.ProjectPaneHeader = React.createClass({
    addTask: function (e) {
      // TODO: open a task form at top of project pane
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      return (
        <div className="project-pane-header group">
          <div className="option left" onClick={this.handleTogglePane}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
          <div className="project-pane-header title truncated">
            {this.props.project.title}
          </div>
          <div className="option right" onClick={this.addTask}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </div>
        </div>
      );
    }
  });
}(this));
