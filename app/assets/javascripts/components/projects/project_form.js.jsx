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

    render: function () {
      return (
        <form className="new-project">
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
