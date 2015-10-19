(function(root) {
  'use strict';

  root.ProjectDelete = React.createClass({
    _deleteProject: function (e) {
      e.preventDefault();
      var callback = function () { this.props.closeModal(); }.bind(this);
      ProjectActions.deleteProject(this.props.data, callback);
    },

    handleCloseProjectDelete: function (e) {
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.props.closeModal();
      }
    },

    render: function () {
      return (
        <div>
          <div className="row modal-bg"
            onClick={this.handleCloseProjectDelete}>
          </div>
          <div className="project-form delete modal-fg">
            <div>
              {"Are you sure you want to delete " + this.props.data.title + "?"}
            </div>
            <button className="btn btn-primary pull-right"
              onClick={this._deleteProject}>Delete Project</button>
            <button className="btn btn-link"
              onClick={this.handleCloseProjectDelete}>Cancel</button>
          </div>
        </div>
      );
    }
  });
}(this));
