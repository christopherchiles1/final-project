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
          <div className="icon">
            <span className="glyphicon glyphicon-pencil hover-option"
              onClick={this.editProject} />
          </div>
          <div className="projects-list-item-detail truncated">
            { this.props.project.title }
          </div>

        </div>
      );
    }
  });
}(this));
