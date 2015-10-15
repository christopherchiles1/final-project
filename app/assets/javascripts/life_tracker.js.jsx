$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var container = document.getElementById('content');

  var routes = (
    <Route path='/' component={App}>

    </Route>
  );
  // OLD ROUTES -- TODO: Remove unused stuff from old routing
    // <Route path='/' component={App}>
    //   <IndexRoute component={Dashboard} />
    //   <Route path='dashboard' component={Dashboard}>
    //     <Route path='new-project' component={NewProjectForm} />
    //   </Route>
    // </Route>

      // Nest this under '/' when the time comes
          // <Route path='workspace' component={Workspace}>
          //   <Route path='new-task' component={ProjectForm}/>
          // </Route>
  React.render(<Router>{routes}</Router>, container);
});
