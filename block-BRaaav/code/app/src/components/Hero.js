import HeroArticle from './HeroArticle';
import HeroVideo from './HeroVideo';

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container flex">
          <HeroArticle />
          <HeroVideo />
        </div>
      </section>
    </>
  );
}

export default Hero;
