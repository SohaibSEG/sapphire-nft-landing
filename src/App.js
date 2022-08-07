
import NavigationMenu from './navigationMenu/navigationMenu';
import './App.css';
import Hero from './hero/Hero';
import HotDrops from './hotDrops/HotDrops';

function App() {
  return (
    <div className="App fnt-spcgrot clr-lightgray">
      <NavigationMenu></NavigationMenu>
      <Hero></Hero>
      <HotDrops/>
    </div>
  );
}

export default App;
