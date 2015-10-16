(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    render: function () {
      return (
        <div className="projects-list-item truncated"
          onClick={this.props.togglePane.bind(null, this.props.project)}>
            { this.props.project.title }
        </div>
      );
    }
  });
}(this));
