import NavigationMenu from "./navigationMenu/navigationMenu";
import "./App.css";
import Hero from "./hero/Hero";
import HotDrops from "./hotDrops/HotDrops";
import CreateAndSell, { JoinCommunity } from "./callToAction/CallToAction";
import TopCreators from "./topCreators/TopCreators";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App fnt-spcgrot clr-lightgray">
      <NavigationMenu />
      <Hero />
      <HotDrops />
      <CreateAndSell />
      <TopCreators />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
