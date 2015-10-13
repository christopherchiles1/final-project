(function(root) {
  'use strict';

  root.App = React.createClass({
    render: function () {
      return (
        <div className="app">
          <NavBar/>
          {this.props.children}
        </div>
      );
    }
  });

}(this));
