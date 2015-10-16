(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    // _renderProjectForm: function () {
    //   alert("Render coming soon!");
    // },

    newProject: function (e) {
      e.preventDefault();
      this.props.openModal();
    },

    render: function () {
      return (
        <div className="sidebar tall">
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
                    togglePane={this.props.togglePane} />
                 );
              }.bind(this))
            }
          </div>
        </div>
      );
    }
  });

}(this));
