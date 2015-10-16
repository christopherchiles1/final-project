(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    newProject: function (e) {
      e.preventDefault();
      this.props.openProjectForm();
    },

    render: function () {
      return (
        <div className="sidebar tall shadowed">
          <button type="button" className="btn btn-primary btn-block"
            onClick={this.newProject}>
            New Project
          </button>
          <div className="projects-list">
            {
              this.props.projects.map(function (project) {
                return (
                  <ProjectsListItem
                    key={project.id}
                    project={project}
                    togglePane={this.props.togglePane}
                    openProjectDelete={this.props.openProjectDelete} />
                 );
              }.bind(this))
            }
          </div>
        </div>
      );
    }
  });

}(this));
