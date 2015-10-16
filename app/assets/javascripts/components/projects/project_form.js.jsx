(function(root) {
  'use strict';

  root.ProjectForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.project) {
        return {
          title: this.props.project.title,
          description: this.props.project.description
        };
      } else {
        return {
          title: '', description: ''
        };
      }
    },

    componentDidMount: function () {
      this.refs.titleInput.getDOMNode().focus();
    },

    _createProject: function (e) {
      e.preventDefault();
      var project = {
        title: this.state.title,
        description: this.state.description,
        ord: 1 // NOTE: Change this later
      };

      var callback = function () { this.props.closeModal(); }.bind(this);

      ProjectActions.createProject(project, callback);
    },

    _updateProject: function (e) {
      e.preventDefault();
      var project = {
        id: this.props.project.id,
        title: this.state.title,
        description: this.state.description
      };

      var callback = function () { this.props.closeModal(); }.bind(this);
      ProjectActions.updateProject(project, callback);
    },

    handleCloseProjectForm: function (e) {
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.props.closeProjectForm();
      }
    },

    render: function () {
      var callback;
      var text;
      if (this.props.project) {
        callback = this._updateProject;
        text = "Update Project";
      } else {
        callback = this._createProject;
        text = "Add Project";
      }
      return (
        <div className="row modal-bg"
          onClick={this.handleCloseProjectForm}>
          <div className="col-xs-offset-4 col-xs-4">
            <form className="project-form"
              onSubmit={callback}>
              <div>
                <input className="project-form-input title"
                  ref="titleInput"
                  placeholder="New Project Title"
                  type="text"
                  valueLink={this.linkState("title")}
                />
              </div>
              <div>
                <textarea className="project-form-input detail"
                  rows="5"
                  placeholder="Description"
                  valueLink={this.linkState("description")}
                />
              </div>
              <button className="btn btn-primary pull-right">{text}</button>
              <button className="btn btn-link"
                onClick={this.handleCloseProjectForm}>Cancel</button>
            </form>
          </div>
        </div>
      );
    }
  });
}(this));
