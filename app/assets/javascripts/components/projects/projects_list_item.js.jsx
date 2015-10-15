(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    _togglePane: function (e) {
      ProjectActions.updateProject({
        id: this.props.project.id,
        visible: !this.props.project.visible
      });
    },

    render: function () {
      return (
        <div className="dev-projects-list-item"
          onClick={this._togglePane}>
            { this.props.project.title }
        </div>
      );
    }
  });
}(this));
