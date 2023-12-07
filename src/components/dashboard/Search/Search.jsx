import React, { useState } from 'react'
import './Search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({search,setSearch}) => {
   
  return (
    <div className='search'>
        <SearchRoundedIcon/>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search