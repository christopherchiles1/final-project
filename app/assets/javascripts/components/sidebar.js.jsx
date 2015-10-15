(function(root) {
  'use strict';

  root.Sidebar = React.createClass({
    render: function () {
      return (
        <div className="dev-sidebar">
          {this.props.children}
        </div>
      );
    }
  });

}(this));
