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
        <ul className="projects-index">
          {this.props.children}
          {
            this.state.projects.map(function (project) {
              return (
                <ProjectsIndexItem
                  key={project.id}
                  project={project}/>
               );
            })
          }
        </ul>
      );
    }
  });

}(this));
