import "./Datapiece.css";

function NFTdatapiece(props){
    return (
        <div className="nft-datapiece fnt-dmono" >
            <p className="data-title">{props.title}</p>
            <p className="data-value">{props.value}</p>

        </div>
    )
}

export default NFTdatapiece;