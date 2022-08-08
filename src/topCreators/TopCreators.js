import BuOutline from "../buttons/buOutline";
import BuSecondary from "../buttons/buSecondary";
import NFTCreator from "../cards/NFTCreator";
import "./topCreators.css"

function TopCreators(){
    return (
        <div className="top-creators">
            <h2 className="section-heading">Top Creators of the Week</h2>
            <div className="top-creators__container">
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
                <NFTCreator name="sohaib segueni" earnings="11905.25 ETH"/>
    
            </div>
            <BuOutline text="View Creators"/>
        </div>
    )
}

export default TopCreators;