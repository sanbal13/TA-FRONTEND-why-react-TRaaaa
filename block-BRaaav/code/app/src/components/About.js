import AboutArticle from './AboutArticle';
import AboutGraph from './AboutGraph';
import AboutImage from './AboutImage';

function About() {
  return (
    <>
      <section className="about padding">
        <div className="container flex align-start">
          <AboutArticle />
          <AboutGraph />
          <AboutImage />
        </div>
      </section>
    </>
  );
}

export default About;
