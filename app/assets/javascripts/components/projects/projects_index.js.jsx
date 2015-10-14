(function(root) {
  'use strict';

  root.ProjectsIndex = React.createClass({
    getInitialState: function () {
      return { projects: ProjectStore.all() };
    },

    componentDidMount: function () {
      ProjectStore.addProjectChangeListener(this._onChange);
      ProjectActions.fetchAllProjects();
    },

    componentWillUnmount: function () {
      ProjectStore.removeProjectChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ projects: ProjectStore.all() });
    },

    render: function () {
      return (
        <div className="row">
          {this.props.children}
          {
            this.state.projects.map(function (project) {
              return (
                <ProjectsIndexItem className="project-index-item"
                  key={project.id}
                  project={project}/>
               );
            })
          }
        </div>
      );
    }
  });

}(this));
