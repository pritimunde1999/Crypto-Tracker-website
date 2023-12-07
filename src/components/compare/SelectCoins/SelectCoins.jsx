import React, { useEffect, useState } from 'react'
import { get100coins } from '../../../functions/get100coins'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./SelectCoins.css"

const SelectCoins = ({crypto1,crypto2,handleCoinChange}) => {
    const [allCoins,setAllCoins] = useState([])

    
    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
       const mycoins = await get100coins();
       setAllCoins(mycoins)
    }


   return (
    
    <div className='select-coins'>
        <p>Crypto 1</p>
        <Select
          sx={{
            height:'2.5rem',
            color:'var(--white)',
            "& .MuiOutlinedInput-notchedOutline":{
              borderColor : "var(--white)"
            },
            "& .MuiSvgIcon-root" :{
              color : 'var(--white)'
            },
            "&:hover":{
               "&& fieldset":{
                borderColor : '#3a80e9'
               }
            }
          }}
          style={{marginRight:'1rem'}}
          
          value={crypto1}
          onChange={(e)=>handleCoinChange(e,false)}
        >
            {
                allCoins.filter(item => item.id !== crypto2).map((coin,i)=>(
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))
            }
         
          
        </Select>



        <p>Crypto 2</p>
        <Select
          sx={{
            height:'2.5rem',
            color:'var(--white)',
            "& .MuiOutlinedInput-notchedOutline":{
              borderColor : "var(--white)"
            },
            "& .MuiSvgIcon-root" :{
              color : 'var(--white)'
            },
            "&:hover":{
               "&& fieldset":{
                borderColor : '#3a80e9'
               }
            }
          }}
          
          value={crypto2}
          onChange={(e)=>handleCoinChange(e,true)}
        >
            {
                allCoins.filter(item => item.id !== crypto1).map((coin,i)=>(
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))
            }
         
          
        </Select>
      
   
    </div>
  )
}

export default SelectCoins