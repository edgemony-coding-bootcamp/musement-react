import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/:lang'>
					<Home />
				</Route>
				<Route path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

// import { useDispatch, useSelector } from 'react-redux';

// import { fetchCategories } from './redux/categories/categoryActions';
// import { fetchInspirations } from './redux/inspirations/inspirationActions';
// import { fetchExperiences } from './redux/experiences/experienceActions';

// const dispatch = useDispatch();

// const categoryState = useSelector((state) => state.categories);
// const { categories } = categoryState;

// const inspirationState = useSelector((state) => state.inspirations);
// const { inspirations } = inspirationState;

// const experienceState = useSelector((state) => state.experiences);
// const { experiences } = experienceState;

// useEffect(() => {
// 	dispatch(fetchCategories());
// 	dispatch(fetchInspirations());
// 	dispatch(fetchExperiences());
// }, [dispatch]);
