// Components
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Ticker from '../components/Ticker';

const Home = () => {
  return (
    <main className="home-main">
      <div>
        <Hero />
        <Ticker />
      </div>
      <section className="about">
        <div className="container">
          <div className="about-wrapper">
            <SectionTitle title="услуги биржы" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
