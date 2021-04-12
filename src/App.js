import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from './redux/categories/categoryActions';

function App() {
	const categoryList = useSelector((state) => state.categories);
	const { loading, error, categories } = categoryList;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());

	}, [dispatch]);

	return (
		<Router>
      <h1>{categories}</h1>
			<Switch>
				<Route path='/:lang'>
					<h1>Home page</h1>
					{/* <Test /> */}
				</Route>
				<Route path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
