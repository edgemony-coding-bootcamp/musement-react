import Hero from '../components/Hero';
import CategoriesNav from '../components/CategoriesNav';
import { Main } from '../styles';
function Home() {
  return (
    <>
      <CategoriesNav />
      <Main>
        <Hero />
      </Main>
    </>
  );
}

export default Home;
