import axios from 'axios';

export const getCoinPrices = (id,days,type) =>{
   
    const price =  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((res)=>{
       
       return res.data[type]
    })
    .catch((err)=>{
        console.log(err)
    })
    return price;
}