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
          <div className="projects-list-item" onClick={this.newProject}>
            <div className="icon">
              <span className="glyphicon glyphicon-plus"></span>
            </div>
            <div className="projects-list-item-detail">
              {"New Project"}
            </div>
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
