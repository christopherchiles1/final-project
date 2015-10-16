(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    handleOpenProjectForm: function (e) {
      e.preventDefault();
      this.props.openProjectForm.call(null, this.props.project);
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      var percent = 100 / this.props.count;
      return (
        <div className="project-pane"
          style={{ width: "calc(" + percent + "% - 6px)" }}>
          <div className="project-pane-header group">
            <div className="project-pane-header title truncated">
              {this.props.project.title}
            </div>
            <div className="project-pane-header options btn-group"
              role="group">
              <button onClick={this.handleOpenProjectForm}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button onClick={this.handleTogglePane}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="tasks-list">
            No content to display!
          </div>
        </div>
      );
    }
  });
}(this));
