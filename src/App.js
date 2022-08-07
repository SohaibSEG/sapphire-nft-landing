
import NavigationMenu from './navigationMenu/navigationMenu';
import './App.css';
import Hero from './hero/Hero';
import HotDrops from './hotDrops/HotDrops';
import CallToAction from './callToAction/CallToAction';

function App() {
  return (
    <div className="App fnt-spcgrot clr-lightgray">
      <NavigationMenu></NavigationMenu>
      <Hero></Hero>
      <HotDrops/>
      <CallToAction/>
    </div>
  );
}

export default App;
