(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    render: function () {
      return (
        <div className="pane-area">
          {
            this.props.projects.map(function (project) {
              return (
                <ProjectPane
                  key={project.id}
                  project={project}
                  count={ this.props.projects.length }/>
               );
            }.bind(this))
          }
        </div>
      );
    }
  });
}(this));
