import BuPrimary from "../buttons/buPrimary";
import "./navigationMenu.css"
import SearchBar from "./searchBar/searchBar";
function NavigationMenu(){
    return (
        <nav className="nav-menu">
            <div className="logo clickable">
                <p className="logo-text">Sapphire</p>
            </div>
            <div className="navigation">
                <ul className="nav-items">
                    <li className="nav-item nav-active clickable">Explore</li>
                    <li className="nav-item clickable">Marketplace</li>
                    <li className="nav-item clickable">Artists</li>
                    <li className="nav-item clickable">Collections</li>
                </ul>
            </div>
                <SearchBar></SearchBar>
                <BuPrimary text="Sign in"></BuPrimary>
        </nav>
    );
}

export default NavigationMenu;