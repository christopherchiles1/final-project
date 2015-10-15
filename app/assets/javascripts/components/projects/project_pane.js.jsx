(function(root) {
  'use strict';

  root.ProjectPane = React.createClass({
    render: function () {
      return (
        <div className="dev-project-pane"
          style={{ width: (100 / this.props.count) + "%" }}>
          <div className="dev-project-pane-header">
            {this.props.project.title}
          </div>
        </div>
      );
    }
  });
}(this));
