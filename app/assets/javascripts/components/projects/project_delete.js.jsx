(function(root) {
  'use strict';

  root.ProjectDelete = React.createClass({
    _deleteProject: function (e) {
      e.preventDefault();
      var id = this.props.project.id;

      var callback = function () { this.props.closeProjectDelete(); }.bind(this);

      ProjectActions.deleteProject(id, callback);
    },

    handleCloseProjectDelete: function (e) {
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.props.closeProjectDelete();
      }
    },

    render: function () {
      return (
        <div className="row modal-bg"
          onClick={this.handleCloseProjectDelete}>
          <div className="col-xs-offset-4 col-xs-4">
            <div className="project-form delete">
              <div>
                {"Are you sure you want to delete " + this.props.project.title + "?"}
              </div>
              <button className="btn btn-primary pull-right"
                onClick={this._deleteProject}>Delete Project</button>
              <button className="btn btn-link"
                onClick={this.handleCloseProjectDelete}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }
  });
}(this));
