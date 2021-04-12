import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/:lang'>
          <h1>Home page</h1>
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
			</Switch>
		</Router>
	);
}

export default App;
