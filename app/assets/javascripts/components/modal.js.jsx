(function(root) {
  'use strict';

  root.Modal = React.createClass({
    render: function () {
      return (
        <div>
          <div className="modal-bg" onClick={this.props.closeModal}></div>
          { this.props.children }
        </div>
      );
    }
  });
}(this));
