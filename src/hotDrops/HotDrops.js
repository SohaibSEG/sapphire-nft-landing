import BuSecondary from "../buttons/buSecondary";
import NFTitem from "../cards/NFTitem";
import "./HotDrops.css"

function HotDrops(){
    return(
        <section className="hot-drops">
            <p className="section-title fnt-spcgrot">Super Hot Drops</p>
            <ul className="tags">
                <li className="tag">Music</li>
                <li className="tag tg-active">Art</li>
                <li className="tag">Sport</li>
                <li className="tag">Photography</li>
                <li className="tag">Virtual Relaity</li>
                <li className="tag">Videos</li>
                <li className="tag">More...</li>

            </ul>
            <div className="items-container">
                <NFTitem/>
                <NFTitem/>
                <NFTitem/>
                <NFTitem/>
                <NFTitem/>
                <NFTitem/>

            </div>
            <BuSecondary text="View More"></BuSecondary>
        </section>
    )
}

export default HotDrops;