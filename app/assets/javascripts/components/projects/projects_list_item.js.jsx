(function(root) {
  'use strict';

  root.ProjectsListItem = React.createClass({
    getInitialState: function () {
      return {deletable: false};
    },

    addDeletable: function (e) {
      this.setState({deletable: true});
    },

    removeDeletable: function (e) {
      this.setState({deletable: false});
    },

    deleteProject: function (e) {
      this.props.openModal.call(null, ProjectDelete, this.props.project);
      e.stopPropagation();
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      this.props.togglePane.call(null, this.props.project);
    },

    render: function () {
      var deleteButton;
      if (this.state.deletable) {
        deleteButton =
          <span className="glyphicon glyphicon-trash pull-right"
            aria-hidden="true"
            onClick={this.deleteProject}></span>;
      }

      return (
        <div className="projects-list-item truncated"
          onClick={this.handleTogglePane}
          onMouseEnter={this.addDeletable}
          onMouseLeave={this.removeDeletable}>
            { this.props.project.title }
            {deleteButton}
        </div>
      );
    }
  });
}(this));
