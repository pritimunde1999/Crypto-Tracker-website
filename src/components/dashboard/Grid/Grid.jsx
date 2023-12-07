import React from 'react'
import "./Grid.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { NavLink } from 'react-router-dom';

const Grid = ({coin}) => {
  return (
   <NavLink to={`/coin/${coin.id}`}>
     <div className={`grid-card ${coin.price_change_percentage_24h <0 && 'grid-card-red'}`}>
       
        <div className='info-cont'>
          <img src={coin.image} className='coin-logo'/>
          <div className='name-info'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </div>

        
       
       
        {
            coin.price_change_percentage_24h > 0 ? 
            <div className='chip-cont'>
            <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='icon-chip'><TrendingUpRoundedIcon/></div>
            </div>
            :
            <div className='chip-cont'>
            <div className='price-chip red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='icon-chip red'><TrendingDownRoundedIcon/></div>
            </div>
        }

       <div className='extra-info'>
         <h3 className='coin-price'
          style={{color:
             coin.price_change_percentage_24h > 0 ? "var(--green)":'var(--red)'
          }}>
            ${coin.current_price.toLocaleString()}</h3>

            <div className='market-val'>
                <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
                <p>Market Cap : ${coin.market_cap.toLocaleString()}</p>
            </div>
       </div>
       
    </div>
   </NavLink>
  )
}

export default Grid