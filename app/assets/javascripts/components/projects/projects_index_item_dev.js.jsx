(function(root) {
  'use strict';

  root.ProjectsIndexItemDev = React.createClass({
    _togglePane: function (e) {
      // load the projectPane here.
      alert("You clicked on" + this.props.project.title);
    },

    render: function () {
      return (
        <div className="dev-projects-index-item"
          onClick={this._togglePane}>
            { this.props.project.title }
        </div>
      );
    }
  });
}(this));
