import React, { useState } from 'react'
import './List.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { searchInWatchlist } from '../../../functions/searchInWatchlist';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { addedToWatchlist } from '../../../functions/addedToWatchlist';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const List = ({ coin, isWatchlistPage }) => {
    const [added,setAdded] = useState(searchInWatchlist(coin.id));
    
    
    return (
        <NavLink to={`/coin/${coin.id}`}>
            <tr className={`list-row ${coin.price_change_percentage_24h < 0 && 'list-row-red'}`} style={{ display: isWatchlistPage && !added && "none" }}>

<td className='td-1' style={{ width: '35%' }}>
    <div className='info-cont'>
        <Tooltip title='Coin Logo'>
            <img src={coin.image} className='coin-logo' />
        </Tooltip>
        <div className='name-info'>

            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>

        </div>
    </div>
</td>

<td className='td-2' style={{ width: '14%' }}>
    <Tooltip title='Coin Price change % in 24Hrs'>
        {
            coin.price_change_percentage_24h > 0 ?
                <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                :
                <div className='price-chip red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
        }
    </Tooltip>
</td>

<td className='td-3'>
    <div className='flex-cont'>
        {
            coin.price_change_percentage_24h > 0 ?
                <div className='icon-chip td-icon'><TrendingUpRoundedIcon /></div>
                :
                <div className='icon-chip red td-icon'><TrendingDownRoundedIcon /></div>

        }
        <Tooltip title='Coin Price'>
            <h3 className='coin-price'
                style={{
                    color:
                        coin.price_change_percentage_24h > 0 ? "var(--green)" : 'var(--red)'
                }}>
                ${coin.current_price.toLocaleString()}</h3>
        </Tooltip>
    </div>
</td>

<td className='text-right td-total-volume' style={{ width: '14%' }}>
    <Tooltip title='Total Volume'>
        <p>{coin.total_volume.toLocaleString()}</p>
    </Tooltip>
</td>
<td className='text-right td-mkt-dekstop'>
    <Tooltip title='Market Cap'>
        <p>${coin.market_cap.toLocaleString()}</p>
    </Tooltip>
</td>
<td className='text-right td-mkt-mobile'>
    <Tooltip title='Market Cap'>
        <p>${convertNumber(coin.market_cap)}</p>
    </Tooltip>
</td>
 
 <td className='icon-td'>
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
              <StarRoundedIcon className={`watchlist-icon-list ${coin.price_change_percentage_24h <0 && 'watchlist-icon-red'}`}/>
              :
              <StarBorderRoundedIcon className={`watchlist-icon-list ${coin.price_change_percentage_24h <0 && 'watchlist-icon-red'}`}/>
            }
          </IconButton>
 </td>
</tr>
        </NavLink>
    )
}

export default List