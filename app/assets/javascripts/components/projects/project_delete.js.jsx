(function(root) {
  'use strict';

  root.ProjectDelete = React.createClass({
    _deleteProject: function (e) {
      e.preventDefault();
      var callback = function () { this.props.closeModal(); }.bind(this);
      ProjectActions.deleteProject(this.props.data, callback);
    },

    render: function () {
      return (
        <div className="project-form delete modal-fg">
          <div className="padded-text">
            {"Are you sure you want to delete " + this.props.data.title + "?"}
          </div>
          <button className="btn btn-primary pull-right"
            onClick={this._deleteProject}>Delete Project</button>
          <button className="btn btn-link pull-left"
            onClick={this.props.closeModal}>Cancel</button>
        </div>
      );
    }
  });
}(this));
