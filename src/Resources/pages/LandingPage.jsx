import HeroCarousel from "../components/HeroCarousel";
import HighlightedHero from "../components/HighlightedHero";
import IntroHero from "../components/IntroHero";

const LandingPage = () => {
  return (
    <section className="">
      <HeroCarousel />
      <div className="mx-auto max-w-7xl">
        <IntroHero />
        <HighlightedHero />
      </div>
    </section>
  );
};

export default LandingPage;
