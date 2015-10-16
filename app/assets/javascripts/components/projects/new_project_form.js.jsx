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

      var callback = function () { this.props.closeModal(); }.bind(this);

      ProjectActions.createProject(project, callback);
    },

    render: function () {
      return (
        <div className="row project-form">
          <div className="col-xs-offset-3 col-xs-6">
            <form className="project project-form"
              onSubmit={this._createProject}>
              <div>
                <input className="project-title project-form"
                  placeholder="New Project Title"
                  type="text"
                  valueLink={this.linkState("title")}
                />
              </div>
              <div>
                <textarea className="project-detail project-form"
                  rows="5"
                  placeholder="Description"
                  valueLink={this.linkState("description")}
                />
              </div>
              <button className="btn btn-link"
                onClick={this.props.closeModal}>Cancel</button>
              <button className="btn btn-primary pull-right">Add Project</button>
            </form>
          </div>
        </div>
      );
    }
  });
}(this));
