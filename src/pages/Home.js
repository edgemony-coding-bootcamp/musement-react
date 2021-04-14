import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import Activities from './Activities';

function Home() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div>Header</div>

      {/* test link in order to see if the future implementation of nested router with links could be valid

      <Link to={`${url}/activities`}>link ad activities</Link>      
      
      */}

      <Switch>
        {/* Test Route
        
        <Route exact path={`${path}/activities`}>
          <Activities />
        </Route>
        
        */}
        <Route path={`${path}/*`}>
          <h1>404</h1>
        </Route>
      </Switch>
      <div>Footer</div>
    </>
  );
}

export default Home;
