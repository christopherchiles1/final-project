(function(root) {
  'use strict';

  root.ProjectForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.modalProject) {
        return {
          title: this.props.modalProject.title,
          description: this.props.modalProject.description
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
        id: this.props.modalProject.id,
        title: this.state.title,
        description: this.state.description
      };

      var callback = function () { this.props.closeModal(); }.bind(this);
      ProjectActions.updateProject(project, callback);
    },

    _closeModal: function (e) {
      if (e.currentTarget === e.target) {
        this.props.closeModal();
      }
    },

    render: function () {
      var callback;
      var text;
      if (this.props.modalProject) {
        callback = this._updateProject;
        text = "Update Project";
      } else {
        callback = this._createProject;
        text = "Add Project";
      }
      return (
        <div className="row modal-bg"
          onClick={this._closeModal}>
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
                onClick={this.props.closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      );
    }
  });
}(this));
