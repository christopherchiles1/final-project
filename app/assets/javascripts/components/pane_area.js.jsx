(function(root) {
  'use strict';

  root.PaneArea = React.createClass({
    render: function () {
      return (
        <div className="dev-pane-area">
          This is the pane area
          {this.props.children}
        </div>
      );
    }
  });

}(this));
