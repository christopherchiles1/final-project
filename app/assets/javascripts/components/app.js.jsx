(function(root) {
  'use strict';

  root.App = React.createClass({
    render: function () {
      return (
        <div className="app">
          <NavbarDev />
          <Workspace />
        </div>
      );
    }
  });
}(this));
