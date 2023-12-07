import React from 'react'
import './List.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { NavLink } from 'react-router-dom';

const List = ({ coin }) => {
    
    return (
        <NavLink to={`/coin/${coin.id}`}>
            <tr className={`list-row ${coin.price_change_percentage_24h < 0 && 'list-row-red'}`}>

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
</tr>
        </NavLink>
    )
}

export default List