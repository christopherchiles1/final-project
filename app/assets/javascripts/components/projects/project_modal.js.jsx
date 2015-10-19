(function(root) {
  'use strict';

  root.ProjectModal = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      if (this.props.data) {
        return {
          title: this.props.data.title,
          description: this.props.data.description
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
        description: this.state.description
      };

      var callback = function () { this.props.closeModal(); }.bind(this);

      ProjectActions.createProject(project, callback);
    },

    _updateProject: function (e) {
      e.preventDefault();
      var project = {
        id: this.props.data.id,
        title: this.state.title,
        description: this.state.description
      };

      var callback = function () { this.props.closeModal(); }.bind(this);
      ProjectActions.updateProject(project, callback);
    },

    closeForm: function (e) {
      e.preventDefault();
      if (e.currentTarget === e.target) {
        this.props.closeModal();
      }
    },

    render: function () {
      var callback;
      var text;
      if (this.props.data) {
        callback = this._updateProject;
        text = "Update Project";
      } else {
        callback = this._createProject;
        text = "Add Project";
      }
      return (
        <form className="project-form modal-fg"
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
            onClick={this.closeForm}>Cancel</button>
        </form>
      );
    }
  });
}(this));
