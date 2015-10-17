(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    render: function () {
      return (
        <div className="pane-area tall">
          {
            this.props.projects.map(function (project) {
              return (
                <ProjectPane
                  key={ project.id }
                  project={ project }
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
