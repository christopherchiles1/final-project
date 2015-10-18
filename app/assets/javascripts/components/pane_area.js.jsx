(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    getInitialState: function () {
      return {
        tasks: TaskStore.all()
      };
    },

    componentDidMount: function () {
      TaskStore.addTaskChangeListener(this._onChange);
      TaskActions.fetchAllTasks();
    },

    componentWillUnmount: function () {
      TaskStore.removeTaskChangeListener(this._onChange);
    },

    _onChange: function () {
      // Maybe just force a re-render and hold no state?
      this.setState({
        tasks: TaskStore.all()
      });
    },

    // NOTE: TA: Any problems with doing TaskStore.findByProject(project); in render?
    render: function () {
      return (
        <div className="pane-area tall">
          {
            this.props.projects.map(function (project) {
              var tasks = TaskStore.findByProject(project);
              return (
                <ProjectPane
                  key={ project.id }
                  project={ project }
                  tasks={ tasks }
                  togglePane={ this.props.togglePane }
                  openProjectForm={ this.props.openProjectForm }/>
               );
            }.bind(this))
          }
        </div>
      );
    }
  });
}(this));
