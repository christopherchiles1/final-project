(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    render: function () {
      var percent = 100 / this.props.count;
      var pixels = 5 * this.props.count + 3;
      return (
        <div className="project-pane"
          style={{ width: "calc(" + percent + "% - " + pixels + "px)" }}>
          <div className="project-pane-header">
            {this.props.project.title}
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"
              onClick={this._editProject}></span>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"
              onClick={this.props.togglePane.bind(null, this.props.project)}></span>
          </div>
          <div className="tasks-list">

          </div>
        </div>
      );
    }
  });
}(this));
