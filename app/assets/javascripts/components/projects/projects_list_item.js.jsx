(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    editProject: function (e) {
      this.props.openModal.call(null, ProjectModal, this.props.project);
      e.stopPropagation();
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      return (
        <div className="projects-list-item truncated hover-options"
          onClick={this.handleTogglePane}>
          <div className="projects-list-item-title">
            { this.props.project.title }
          </div>
          <span className="glyphicon glyphicon-pencil option right hover-option"
            aria-hidden="true"
            onClick={this.editProject}></span>
        </div>
      );
    }
  });
}(this));
