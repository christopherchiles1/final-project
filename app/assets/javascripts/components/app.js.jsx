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

    openModal: function (component, data) {
      this.setState({ modalIsOpen: true, component: component, data: data });
    },

    closeModal: function () {
      this.setState({ modalIsOpen: false, component: null, data: null });
    },

    renderModal: function () {
      var modal;
      if (this.state.modalIsOpen) {
        modal = (
          <Modal closeModal={this.closeModal}>
            {
              React.createElement(
                this.state.component,
                { data: this.state.data,
                  closeModal: this.closeModal,
                  openModal: this.openModal }
              )
            }
          </Modal>
        );
      }
      return modal;
    },

    render: function () {
      return (
        <div className="app tall">
          { this.renderModal() }
          <Navbar />
          <Workspace openModal={this.openModal} />
        </div>
      );
    }
  });
}(this));
