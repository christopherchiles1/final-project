(function(root) {
  'use strict';

  root.App = React.createClass({
    getInitialState: function () {
      return { modalIsOpen: false };
    },

    _openModal: function () {
      this.setState({ modalIsOpen: true });
    },

    _closeModal: function () {
      this.setState({modalIsOpen: false });
    },

    render: function () {
      var modal;
      if (this.state.modalIsOpen) {
        modal = <NewProjectForm closeModal={this._closeModal}/>;
      }
      return (
        <div className="app">
          { modal }
          <Navbar />
          <Workspace openModal={this._openModal}/>
        </div>
      );
    }
  });
}(this));
