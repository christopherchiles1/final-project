(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    deleteProject: function (e) {
      this.props.openModal.call(null, ProjectDelete, this.props.project);
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
          { this.props.project.title }
          <span className="glyphicon glyphicon-trash pull-right hover-option"
            aria-hidden="true"
            onClick={this.deleteProject}></span>
        </div>
      );
    }
  });
}(this));
