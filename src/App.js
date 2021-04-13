import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './pages/Home';

const langConfig = {
	uk: 'en-GB',
	us: 'en-US',
	it: 'it-IT',
	fr: 'fr-FR',
	de: 'de-DE',
	es: 'es-ES',
	pt: 'pt-PT',
	br: 'pt-BR',
	ru: 'ru-RU',
	nl: 'nl-NL',
	pl: 'pl-PL',
};

function App() {
	const lang = window.location.pathname.replace('/', '');
	const defLang = 'uk';

	const checkLang = () => {
		if (lang === defLang) {
			const langKeys = Object.keys(langConfig);
			const langUrl = langKeys.find((key) => key === lang);
			console.log(langUrl);
			return langUrl;
		} else return defLang;
	};

	return (
		<Router>
			<Switch>
				<Route path='/:lang'>
					<Redirect push to={`/${checkLang()}`} />
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

