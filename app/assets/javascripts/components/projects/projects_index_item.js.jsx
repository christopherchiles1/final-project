(function(root) {
  'use strict';

  root.ProjectsIndexItem = React.createClass({
    render: function () {
      return (
        <div className="projects-index-item">
          {
            this.props.project
          }
        </div>
      );
    }
  });
}(this));
