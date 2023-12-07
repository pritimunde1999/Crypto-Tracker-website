import { toast } from 'react-toastify'

export const addedToWatchlist = (id)=>{
    const items = localStorage.getItem("watchlist");

    if(items){
        let arr = JSON.parse(items);

        if(!arr.includes(id))
        {
            arr.push(id);
            localStorage.setItem("watchlist",JSON.stringify(arr))
        }
    }
    else
    {
        let arr = JSON.stringify([id]);
        localStorage.setItem('watchlist',arr)
    }

    toast.success(`${id.slice(0,1).toUpperCase() + id.slice(1)} - Added to the Watchlist!`)
   
}