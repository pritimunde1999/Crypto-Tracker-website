import React, { useState } from 'react'
import "./Grid.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { searchInWatchlist } from '../../../functions/searchInWatchlist';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { addedToWatchlist } from '../../../functions/addedToWatchlist';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Grid = ({coin,isWatchlistPage}) => {
  const [added,setAdded] = useState(searchInWatchlist(coin.id));


  return (
   <NavLink to={`/coin/${coin.id}`}>
     <div className={`grid-card ${coin.price_change_percentage_24h <0 && 'grid-card-red'}`} style={{ display: isWatchlistPage && !added && "none" }}>
       
     <div className='flex-grid-watch-icon'>
        <div className='grid-info-cont'>
         
          <img src={coin.image} className='grid-coin-logo'/>
          <div className='grid-name-info'>
            <p className='grid-coin-symbol'>{coin.symbol}</p>
            <p className='grid-coin-name'>{coin.name}</p>
          </div>
          </div>

          <IconButton
            onClick={(e)=>{
              e.preventDefault();
              if(added){
                 removeFromWatchlist(coin.id);
                 setAdded(false)
              }
              else
              {
                 addedToWatchlist(coin.id);
                 setAdded(true);
              }
            }}
          >
            {
              added ? 
              <StarRoundedIcon className={`watchlist-icon ${coin.price_change_percentage_24h <0 && 'watchlist-icon-red'}`}/>
              :
              <StarBorderRoundedIcon className={`watchlist-icon ${coin.price_change_percentage_24h <0 && 'watchlist-icon-red'}`}/>
            }
          </IconButton>
        </div>

        
       
       
        {
            coin.price_change_percentage_24h > 0 ? 
            <div className='grid-chip-cont'>
            <div className='grid-price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='grid-icon-chip'><TrendingUpRoundedIcon/></div>
            </div>
            :
            <div className='grid-chip-cont'>
            <div className='grid-price-chip red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='grid-icon-chip red'><TrendingDownRoundedIcon/></div>
            </div>
        }

       <div className='grid-extra-info'>
         <h3 className='grid-coin-price'
          style={{color:
             coin.price_change_percentage_24h > 0 ? "var(--green)":'var(--red)'
          }}>
            ${coin.current_price.toLocaleString()}</h3>

            <div className='grid-market-val'>
                <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
                <p>Market Cap : ${coin.market_cap.toLocaleString()}</p>
            </div>
       </div>
       
    </div>
   </NavLink>
  )
}

export default Grid