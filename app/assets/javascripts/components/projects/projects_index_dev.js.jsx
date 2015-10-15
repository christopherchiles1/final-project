(function(root) {
  'use strict';

  root.ProjectsIndexDev = React.createClass({
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
        <div className="dev-projects-index">
          {
            this.state.projects.map(function (project) {
              return (
                <div className="dev-projects-index-item">{project.title}</div>
               );
            })
          }
        </div>
      );
    }
  });

}(this));
