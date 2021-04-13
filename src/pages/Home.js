import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
	let { lang } = useParams();
	let history = useHistory();

	console.log(lang);
	useEffect(() => {
		lang !== 'uk' && history.push('/uk');
	}, [lang]);

	return <div>Home Page</div>;
}

export default Home;
