(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    render: function () {
      return (
        <div className="sidebar">
          <div className="projects-list">
            {
              this.props.projects.map(function (project) {
                return (
                  <ProjectsListItem
                    key={project.id}
                    project={project}/>
                 );
              })
            }
          </div>
        </div>
      );
    }
  });

}(this));
