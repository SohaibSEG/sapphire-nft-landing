import './card.css'
import NFTdatapiece from './datapiece/NFTdatapiece';

function NFTitem(){
    return (
        <div className='card-nft'>
            <img src='./images/nft/bored_ape.jpg' alt='nft' className='img-main'/>
            <div className='nft'>
            <p className='nft-name'>Bored Apes</p>
            <p className='nft-creator'>Created by <b>SohaibSEG</b></p>
            </div>
            <ul className='nft-thumbnails'>
                <li>
                <img src='./images/nft/bored_ape.jpg' alt='' className='nft-thumbnail'/> 
                </li>
            </ul>
            
            <div className='nft-data'>
                <NFTdatapiece title='Current Bid' value='0.45 ETH'/>
                <NFTdatapiece title='Ending In' value='10h 35min 10s'/>
            </div>
        </div>
    )
}
export default NFTitem;