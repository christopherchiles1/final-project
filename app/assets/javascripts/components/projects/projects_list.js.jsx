(function(root) {
  'use strict';

  root.ProjectsList = React.createClass({
    render: function () {
      return (
        <div className="projects-list">
          {
            this.props.projects.map(function (project) {
              return (
                <ProjectsListItem
                  key={project.id}
                  project={project}
                  togglePane={this.props.togglePane}
                  openModal={this.props.openModal} />
               );
            }.bind(this))
          }
        </div>
      );
    }
  });

}(this));
