$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var container = document.getElementById('content');

  var routes = (
    <Route path='/' component={App}></Route>
  );

  React.render(<Router>{routes}</Router>, container);
});
