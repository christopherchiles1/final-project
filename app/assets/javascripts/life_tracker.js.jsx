$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var container = document.getElementById('content');

  var routes = (
    <Route path='/' component={App}>
      <Route path='dashboard' component={Dashboard}>
      </Route>
    </Route>
  );
  // Nest this under '/dashboard'
        // <Route path='new-project' component={ProjectForm}/>
  // Nest this under '/' when the time comes
      // <Route path='workspace' component={Workspace}>
      //   <Route path='new-task' component={ProjectForm}/>
      // </Route>
  React.render(<Router>{routes}</Router>, container);
});
