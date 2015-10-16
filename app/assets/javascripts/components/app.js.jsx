(function(root) {
  'use strict';

  root.App = React.createClass({
    getInitialState: function () {
      return ({
        projectFormIsOpen: false,
        projectDeleteIsOpen: false,
        data: null });
    },

    _openProjectForm: function (data) {
      this.setState({ projectFormIsOpen: true, data: data });
    },

    _closeProjectForm: function () {
      this.setState({ projectFormIsOpen: false, data: null });
    },

    _openProjectDelete: function (data) {
      this.setState({ projectDeleteIsOpen: true, data: data });
    },

    _closeProjectDelete: function () {
      this.setState({ projectDeleteIsOpen: false, data: null });
    },

    render: function () {
      var modal;
      if (this.state.projectFormIsOpen) {
        modal =
          <ProjectForm
            closeProjectForm={ this._closeProjectForm }
            project={ this.state.data }/>;
      } else if (this.state.projectDeleteIsOpen) {
        modal =
          <ProjectDelete
            closeProjectDelete={ this._closeProjectDelete }
            project={ this.state.data }/>;
      }
      return (
        <div className="app tall">
          { modal }
          <Navbar />
          <Workspace
            openProjectForm={this._openProjectForm}
            openProjectDelete={this._openProjectDelete} />
        </div>
      );
    }
  });
}(this));
