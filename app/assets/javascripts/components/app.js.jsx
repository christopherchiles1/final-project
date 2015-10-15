(function(root) {
  'use strict';

  root.App = React.createClass({
    render: function () {
      return (
        <div className="app">
          <NavbarDev />
          <div className="container-fluid shift-down">
            <div className="row">
              <div className="col-xs-2 nopadding">
                <Sidebar>
                  <ProjectsIndexDev />
                </Sidebar>
              </div>
              <div className="row col-xs-10 nopadding">
                <PaneArea />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

}(this));
