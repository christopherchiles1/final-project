(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    // _renderProjectForm: function () {
    //   alert("Render coming soon!");
    // },

    render: function () {
      return (
        <div className="sidebar">
          <button type="button" className="btn btn-primary btn-block"
            onClick={this.props.openModal}>
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
