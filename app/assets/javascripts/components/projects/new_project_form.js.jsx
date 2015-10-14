(function(root) {
  'use strict';

  root.NewProjectForm = React.createClass({
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
        <div className="col-xs-4">
          <form className="project project-new"
            onSubmit={this._createProject}>
            <div>
              <input className="new-project-title"
                placeholder="New Project Title"
                type="text"
                valueLink={this.linkState("title")}
              />
            </div>
            <div>
              <textarea className="project-detail"
                rows="3"
                placeholder="Description"
                valueLink={this.linkState("description")}
              />
            </div>
            <button className="pull-right">Add Project</button>
          </form>
        </div>
      );
    }
  });
}(this));
