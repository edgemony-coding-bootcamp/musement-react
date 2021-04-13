import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import CategoriesNav from '../components/CategoriesNav';

function Home() {
	let { lang } = useParams();
	let history = useHistory();

	console.log(lang);
	useEffect(() => {
		lang !== 'uk' && history.push('/uk');
	}, [lang]);

	return (
		<>
			<CategoriesNav />
			<Hero />
		</>
	);
}

export default Home;
