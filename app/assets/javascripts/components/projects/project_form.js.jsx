(function(root) {
  'use strict';

  root.ProjectForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return {
        title: '',
        description: ''
      };
    },

    _createProject: function (e) {
      e.preventDefault();
      var project = {
        title: this.state.title,
        description: this.state.description,
        ord: 1 // NOTE: Change this later
      };
      ProjectActions.createProject(project);
      this.setState({title: '', description: ''});
    },

    render: function () {
      return (
        <form className="new-project"
          onSubmit={this._createProject}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              valueLink={this.linkState("title")}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              valueLink={this.linkState("description")}
            />
          </div>
          <button>Add Project</button>
        </form>
      );
    }
  });
}(this));
