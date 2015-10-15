(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    // has this.props.projects
    render: function () {
      return (
        <div className="dev-sidebar">
          <div className="dev-projects-list">
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
