import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./GraphValuesType.css"

export default function GraphValuesTypeToggle({graphValuesType,handleGraphValueTypeChange}) {
  return (
    <div className='toggle-button-cont'>
    <ToggleButtonGroup
      value={graphValuesType}
      exclusive
      onChange={handleGraphValueTypeChange}
      sx={{
        "& .Mui-selected" :{
            color: 'var(--blue) !important'
        },
        borderColor : "var(--blue)",
        border : 'unset !important',
        "& .MuiToggleButtonGroup-grouped":{
            border:'1px solid !important',
            borderColor:'unset',
            color:'var(--blue)'
        },
        '& .MuiToggleButton-standard':{
            color: 'var(--blue)'
        }

      }}
    >
      <ToggleButton className='toggle-btn' value="prices">Price</ToggleButton>
      <ToggleButton className='toggle-btn' value="market_caps">Market Cap</ToggleButton>
      <ToggleButton className='toggle-btn' value="total_volumes">Total Volume</ToggleButton>
   
    </ToggleButtonGroup>
    </div>
  );
}