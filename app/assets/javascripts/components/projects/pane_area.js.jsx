(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    render: function () {
      return (
        <div className="pane-area full-height">
          {
            this.props.projects.map(function (project) {
              return (
                <ProjectPane
                  key={ project.id }
                  project={ project }
                  count={ this.props.projects.length }
                  togglePane={ this.props.togglePane }
                  openModal={ this.props.openModal }/>
               );
            }.bind(this))
          }
        </div>
      );
    }
  });
}(this));
