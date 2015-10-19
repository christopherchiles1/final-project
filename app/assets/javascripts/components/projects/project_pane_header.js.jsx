(function(root) {
  'use strict';

  root.ProjectPaneHeader = React.createClass({
    editProject: function (e) {
      e.preventDefault();
      this.props.openModal.call(null, ProjectModal, this.props.project);
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      return (
        <div className="project-pane-header group">
          <div className="option-left" onClick={this.handleTogglePane}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
          <div className="project-pane-header title truncated">
            {this.props.project.title}
          </div>
          <div className="option-right" onClick={this.editProject}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </div>
        </div>
      );
    }
  });
}(this));
