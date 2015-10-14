(function(root) {
  'use strict';

  root.ProjectsIndexItem = React.createClass({
    _loadWorkspace: function (e) {
      // load the workspace for the project here.
    },

    render: function () {
      return (
        <div className="col-xs-4">
          <div onClick={ this._loadWorkspace } className="project">
            <div className="project-title">
              { this.props.project.title }
            </div>
            <div className="project-detail">{ this.props.project.description }</div>
          </div>
        </div>
      );
    }
  });
}(this));
