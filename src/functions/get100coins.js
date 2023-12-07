import axios from "axios"

export const get100coins = ()=>{
    console.log("inside 100 coins")
    const coins = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
        
    })
    return coins;
}