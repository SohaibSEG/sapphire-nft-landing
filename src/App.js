import NavigationMenu from "./navigationMenu/navigationMenu";
import "./App.css";
import Hero from "./hero/Hero";
import HotDrops from "./hotDrops/HotDrops";
import CreateAndSell, { JoinCommunity } from "./callToAction/CallToAction";
import TopCreators from "./topCreators/TopCreators";

function App() {
  return (
    <div className="App fnt-spcgrot clr-lightgray">
      <NavigationMenu></NavigationMenu>
      <Hero></Hero>
      <HotDrops />
      <CreateAndSell />
      <TopCreators />
      <JoinCommunity></JoinCommunity>
    </div>
  );
}

export default App;
