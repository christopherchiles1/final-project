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

    handleOpenProjectDelete: function (e) {
      e.preventDefault();
      this.props.openProjectDelete.call(null, this.props.project);
    },

    handleTogglePane: function (e) {
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.props.togglePane.call(null, this.props.project);
      }
    },

    render: function () {
      var deleteButton;
      if (this.state.deletable) {
        deleteButton =
          <span className="glyphicon glyphicon-trash pull-right"
            aria-hidden="true"
            onClick={this.handleOpenProjectDelete}></span>;
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
