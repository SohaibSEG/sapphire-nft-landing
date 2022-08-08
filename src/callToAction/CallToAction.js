import BuOutline from "../buttons/buOutline";
import BuPrimary from "../buttons/buPrimary";
import {BuPrimaryOutline} from "../buttons/buPrimary";
import "./callToAction.css";

function CreateAndSell() {
  return (
    <div className="cta-create">
      <h2 className="section-heading">Create & Sell Your NFTs</h2>
      <div className="cta-cards__container">
        <CTACard
          heading="Create Artwork"
          description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"
        />
        <CTACard
          heading="Upload"
          description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"
        />
        <CTACard
          heading="Listing"
          description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"
        />
      </div>
      <div className="cta-actions__container">
        <BuPrimary text="Create Now" />
        <BuOutline text="Watch Video" />
      </div>
    </div>
  );
}

export function JoinCommunity() {
  return (
    <div className="cta-join">
      <h1 className="section-heading">Join Our Community</h1>
      <p>Meet the Team, artists and collections for problem updates, announcements, and more</p>
      <BuPrimaryOutline text="Take me to Discord"/>
    </div>
  );
}
function CTACard(props) {
  return (
    <div className="cta-card">
      <img src="./images/nft/nft.png" alt="nft" />
      <p className="cta-card__heading">{props.heading}</p>
      <p className="cta-card__description">{props.description}</p>
    </div>
  );
}

export default CreateAndSell ;
