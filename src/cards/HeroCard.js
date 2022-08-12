import "./card.css";
import NFTdatapiece from "./datapiece/Datapiece";

function HeroCard() {
  return (
    <div className="card-nft card-hero">
      <img src="./images/nft/bored_ape.jpg" alt="nft" className="img-main" />
      <div className="nft">
        <p className="nft-name">Bored Apes</p>
      </div>
      <ul className="nft-thumbnails">
        <li>
          <img
            src="./images/nft/bored_ape.jpg"
            alt=""
            className="nft-thumbnail"
          />
        </li>
        <li>
          <img
            src="./images/nft/bored_ape.jpg"
            alt=""
            className="nft-thumbnail"
          />
        </li>
        <li>
          <img
            src="./images/nft/bored_ape.jpg"
            alt=""
            className="nft-thumbnail"
          />
        </li>
        <li>
          <img
            src="./images/nft/bored_ape.jpg"
            alt=""
            className="nft-thumbnail"
          />
        </li>
        <li>
          <img
            src="./images/nft/bored_ape.jpg"
            alt=""
            className="nft-thumbnail"
          />
        </li>
      </ul>
      <div className="nft-data">
        <NFTdatapiece title="Current Bid" value="0.45 ETH" />
        <NFTdatapiece title="Authors" value="900" />
        <NFTdatapiece title="Ending In" value="10h 35min 10s" />
      </div>
    </div>
  );
}
export default HeroCard;
