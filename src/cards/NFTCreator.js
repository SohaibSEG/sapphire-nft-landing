import "./card.css";

function NFTCreator(props) {
  return (
    <div className="nft-creator">
      <img
        className="nft-creator__avatar"
        src="./images/nft/bored_ape.jpg"
        alt=""
      />
      <div className="nft-creator__data">
        <p className="nft-creator__name">{props.name}</p>
        <p className="nft-creator__earnings">{props.earnings}</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-more"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </div>
  );
}

export default NFTCreator;
