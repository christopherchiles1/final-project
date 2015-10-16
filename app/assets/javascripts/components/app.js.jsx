(function(root) {
  'use strict';

  root.App = React.createClass({
    getInitialState: function () {
      return { modalIsOpen: false, modalProject: null };
    },

    _openModal: function (project) {
      this.setState({ modalIsOpen: true, modalProject: project });
    },

    _closeModal: function () {
      this.setState({modalIsOpen: false, modalProject: null });
    },

    render: function () {
      var modal;
      if (this.state.modalIsOpen) {
        modal =
          <ProjectForm
            closeModal={ this._closeModal }
            modalProject={ this.state.modalProject }/>;
      }
      return (
        <div className="app tall">
          { modal }
          <Navbar />
          <Workspace openModal={this._openModal}/>
        </div>
      );
    }
  });
}(this));
