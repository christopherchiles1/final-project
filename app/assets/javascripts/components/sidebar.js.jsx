(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    newProject: function (e) {
      e.preventDefault();
      this.props.openModal.call(null, ProjectModal);
    },

    render: function () {
      return (
        <div className="sidebar full-height shadowed">
          <button type="button" className="btn btn-primary btn-block"
            onClick={this.newProject}>
            New Project
          </button>
          <ProjectsList
            projects={this.props.projects}
            togglePane={this.props.togglePane}
            openModal={this.props.openModal} />
        </div>
      );
    }
  });

}(this));
