(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    newProject: function (e) {
      e.preventDefault();
      this.props.openModal.call(null, ProjectModal);
    },

    render: function () {
      return (
        <div className="sidebar full-height shadowed">
          <div className="sidebar-button projects-list-item truncated hover-options"
            onClick={this.newProject}>
            <div className="projects-list-item-title">
              {" New Project"}
            </div>
            <span className="glyphicon glyphicon-plus option right hover-option"></span>
          </div>
          <ProjectsList
            projects={this.props.projects}
            togglePane={this.props.togglePane}
            openModal={this.props.openModal} />
        </div>
      );
    }
  });

}(this));
