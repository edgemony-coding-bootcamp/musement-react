import { Route, Switch, useRouteMatch } from 'react-router-dom';

function Home() {
  let { path } = useRouteMatch();
  return (
    <>
      <div>Header</div>
      <Switch>
        <Route path={`${path}/*`}>
          <h1>404</h1>
        </Route>
      </Switch>
      <div>Footer</div>
    </>
  );
}

export default Home;
