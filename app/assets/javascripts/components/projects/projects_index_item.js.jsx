(function(root) {
  'use strict';

  root.ProjectsIndexItem = React.createClass({
    render: function () {
      return (
        <div className="col-xs-4">
          <div className="project-bubble">
            <div className="project-title">{ this.props.project.title }</div>
            <div className="project-detail">{ this.props.project.description }</div>
          </div>
        </div>
      );
    }
  });
}(this));
