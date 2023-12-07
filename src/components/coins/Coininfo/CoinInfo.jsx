import React, { useState } from 'react'
import "./CoinInfo.css"

const CoinInfo = ({heading, desc}) => {

    const shortDesc = desc.slice(0,400) + "<p style='color:var(--grey)'>Read More...</p>";
    const longDesc = desc + "<p style='color:var(--grey)'>Read Less...</p>";

    const[flag,setFlag] = useState(false);

  return (
    <div className='coinData-wrapper coin-infomation'>
       <h2>{heading}</h2>
       {
          desc.length > 400 ?
          <p className='coin-info-desc' onClick={()=>setFlag(!flag)} dangerouslySetInnerHTML={{__html: !flag ? shortDesc : longDesc}}/>
          :
          <p className='coin-info-desc' dangerouslySetInnerHTML={{__html: desc}}/>
       }
    </div>
  )
}

export default CoinInfo