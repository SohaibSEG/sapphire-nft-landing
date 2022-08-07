import BuOutline from "../buttons/buOutline";
import BuPrimary from "../buttons/buPrimary";
import "./callToAction.css";


function CallToAction(){
    return(
        <div className="call-to-action">
            <h2 className="section-heading">Create & Sell Your NFTs</h2>
            <div className="cta-cards__container">
                <CATCard heading="Create Artwork" description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"/>
                <CATCard heading="Upload" description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"/>
                <CATCard heading="Listing" description="Create your collection, Add social links, profile & banner images, and set a secondary sales fee"/>
            </div>
            <div className="cta-actions__container">
                <BuPrimary text="Create Now"/>
                <BuOutline text="Watch Video"/>
            </div>
        </div>
    );
}

function CATCard(props){
    return (
        <div className="cta-card">
            <img src="./images/nft/nft.png" alt="nft"/>
            <p className="cta-card__heading">{props.heading}</p>
            <p className="cta-card__description">{props.description}</p>
        </div>
    )
}
export default CallToAction;