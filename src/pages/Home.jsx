
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import PropertySearch from "../components/home/PropertySearch";
import TrustIndicators from "../components/home/TrustIndicators";
import FeaturedProperties from "../components/home/FeaturedProperties";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PropertySearch />
        <TrustIndicators />
        <FeaturedProperties />
      </main>
    </>
  );
}

export default Home;
