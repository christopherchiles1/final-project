(function(root) {
  'use strict';

  root.App = React.createClass({
    getInitialState: function () {
      return ({
        modalIsOpen: false,
        component: null,
        data: null
      });
    },

    _openModal: function (component, data) {
      this.setState({ modalIsOpen: true, component: component, data: data});
    },

    _closeModal: function () {
      this.setState({ modalIsOpen: false, component: null, data: null});
    },

    render: function () {
      var modal;
      if (this.state.modalIsOpen) {
        modal = React.createElement(
          this.state.component,
          { data: this.state.data, closeModal: this._closeModal }
        );
      }

      return (
        <div className="app tall">
          { modal }
          <Navbar />
          <Workspace openModal={this._openModal} />
        </div>
      );
    }
  });
}(this));
