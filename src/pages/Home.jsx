import Header from 'components/Header';
import Results from 'components/Results';
import Listing from 'components/Listing';

function Home() {
  return (
    <main className="App">
      <Header />

      <section className="Display">
        <Results />
        <Listing />
      </section>
    </main>
  );
}

export default Home;
