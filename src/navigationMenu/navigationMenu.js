import { useState } from "react";
import BuPrimary from "../buttons/buPrimary";
import "./navigationMenu.css";
import SearchBar from "./searchBar/searchBar";
function NavigationMenu() {
  const [MenuVisible, setMenuVisible] = useState(false);
  function toggleMenu(oldState){
    setMenuVisible(!oldState);
  }
  return (
    <nav className="nav-menu">
      <div className="logo clickable">
        <p className="logo-text">Sapphire</p>
      </div>
      <div className="menu-wrapper" data-visible={`${MenuVisible}`}>
        <button className="close-menu" onClick={()=>{toggleMenu(MenuVisible)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="nav-links">
          <li className="nav-item nav-active clickable">Explore</li>
          <li className="nav-item clickable">Marketplace</li>
          <li className="nav-item clickable">Artists</li>
          <li className="nav-item clickable">Collections</li>
        </ul>

        <SearchBar></SearchBar>
        <BuPrimary text="Sign in"></BuPrimary>
      </div>
      <button className="open-menu" onClick={()=>{toggleMenu(MenuVisible)}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="burger"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      </button>
    </nav>
  );
}

export default NavigationMenu;
