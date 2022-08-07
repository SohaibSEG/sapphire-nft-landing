import BuPrimary from "../buttons/buPrimary";
import HeroCard from "../cards/HeroCard";
import "./Hero.css"
import StatPiece from "./StatePiece";

function Hero(props){
    return (<main className="hero-section">
        <HeroCard ></HeroCard>
        <h1>Discover, Sell<br/> & Collect Rare<br/> NFTs</h1>
        <p className="fnt-poppins hero-txt">Digital marketplace for crypto collections and non-fungible tokens (NFTs)</p>
        <BuPrimary text="Discover Now"></BuPrimary>
        <div className="hero-stats">
            <StatPiece value="35k+" title="Artworks"></StatPiece>
            <StatPiece value="15k+" title="Auctions"></StatPiece>
            <StatPiece value="25k+" title="Artists"></StatPiece>

        </div>
    </main>);
}

export default Hero;