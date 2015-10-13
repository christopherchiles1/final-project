(function(root) {
  'use strict';

  root.Navbar = React.createClass({
    render: function () {
      return (
        <div className="navbar">
          {this.props.children}
        </div>
      );
    }
  });

}(this));
