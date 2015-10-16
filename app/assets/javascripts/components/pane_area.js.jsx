(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    render: function () {
      return (
        <div className="pane-area group">
          {
            this.props.projects.map(function (project) {
              return (
                <ProjectPane
                  key={project.id}
                  project={project}
                  togglePane={this.props.togglePane}
                  count={ this.props.projects.length }/>
               );
            }.bind(this))
          }
        </div>
      );
    }
  });
}(this));
