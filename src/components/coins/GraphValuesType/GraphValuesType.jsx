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
      <ToggleButton
          className={`toggle-btn ${graphValuesType === 'prices' ? 'selected' : ''}`}
          value="prices"
          sx={{
            backgroundColor: graphValuesType === 'prices' ? 'rgba(58, 128, 233,0.1) !important' : 'unset',
          }}
        >Price</ToggleButton>
     <ToggleButton
          className={`toggle-btn ${graphValuesType === 'market_caps' ? 'selected' : ''}`}
          value="market_caps"
          sx={{
            backgroundColor: graphValuesType === 'market_caps' ? 'rgba(58, 128, 233,0.1) !important' : 'unset',
          }}
        >Market Cap</ToggleButton>
      <ToggleButton
          className={`toggle-btn ${graphValuesType === 'total_volumes' ? 'selected' : ''}`}
          value="total_volumes"
          sx={{
            backgroundColor: graphValuesType === 'total_volumes' ? 'rgba(58, 128, 233,0.1) !important' : 'unset',
          }}
        >Total Volume</ToggleButton>
   
    </ToggleButtonGroup>
    </div>
  );
}