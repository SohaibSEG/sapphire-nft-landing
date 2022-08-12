import BuPrimary from "../buttons/buPrimary";
import HeroCard from "../cards/HeroCard";
import "./Hero.css";
import StatPiece from "./StatePiece";

function Hero(props) {
  return (
    <div className="hero">
      <main className="hero-section">
        <HeroCard></HeroCard>
        <h1>
          Discover, Sell
          <span id="line-break"><br/></span> & Collect Rare
          <span id="line-break"><br/></span>NFTs
        </h1>
        <p className="fnt-poppins hero-txt">
          Digital marketplace for crypto collections and non-fungible tokens
          (NFTs)
        </p>
        <BuPrimary text="Discover Now"></BuPrimary>
        <div className="hero-stats">
          <StatPiece value="35k+" title="Artworks"></StatPiece>
          <StatPiece value="15k+" title="Auctions"></StatPiece>
          <StatPiece value="25k+" title="Artists"></StatPiece>
        </div>
      </main>
      <div className="hero-partners">
        <img src="./images/partners/coinbase.png" alt="coinbase" />
        <img src="./images/partners/bitgo.png" alt="bitgo" />
        <img src="./images/partners/exodus.png" alt="exodus" />
        <img src="./images/partners/trezor.png" alt="trezor" />

      </div>
    </div>
  );
}

export default Hero;
