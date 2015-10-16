(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    render: function () {
      return (
        <div className="projects-list-item"
          onClick={this.props.togglePane}>
            { this.props.project.title }
        </div>
      );
    }
  });
}(this));
