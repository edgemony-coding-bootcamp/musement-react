import Card from '../components/Card'

// THIS IS ONLY FOR TEST APICALL - MUST BE REMOVED 
import { fetchExperiences } from '../redux/experiences/experienceActions';

function Home({ children }) {
	return (
		<div>
			Home Page
			<Card fetch={fetchExperiences} />
			{children}
		</div>
	);
}

export default Home;
