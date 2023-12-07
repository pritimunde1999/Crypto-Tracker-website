import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import "./Loader.css"

const Loader = () => {
  return (
    <div className='loader'>
        <CircularProgress />
    </div>
  )
}

export default Loader