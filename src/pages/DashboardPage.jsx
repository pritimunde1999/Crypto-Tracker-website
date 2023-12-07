import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header/Header'
import Tabs from '../components/dashboard/Tabs/Tabs'
import axios from 'axios';
import Search from '../components/dashboard/Search/Search';
import PaginationComp from '../components/dashboard/Pagination/Pagination';
import Loader from '../components/common/Loader/Loader';
import BackToTop from '../components/common/BackToTop/BackToTop';
import { get100coins } from '../functions/get100coins';



const DashboardPage = () => {
    const [coins, setCoins] = useState([]);
    const[search,setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoding,setIsLoading] = useState(true);

    const handlePageChange=(event, value)=>{
      setPageNumber(value);
      let startingIndex = (value-1)*10;
      setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
     
    }

    useEffect(()=>{
        getData()
    },[])

    const getData= async()=>{
      const myCoins = await get100coins();
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10))
      setIsLoading(false)
    }

    let filterCoins = coins.filter(coin=>(coin.name.toLowerCase().includes(search.toLowerCase())) || (coin.symbol.toLowerCase().includes(search.toLowerCase())))

  return (
    <div>
       <Header/>
        {
          
          isLoding ? <Loader/> :
         <>
          
          <Search search={search} setSearch={setSearch}/>
          <Tabs coins={search ? filterCoins : paginatedCoins}/>
          <PaginationComp pageNumber={pageNumber} handlePageChange={handlePageChange}/>
         </>
         
        }

      <BackToTop/>
          
        
       
    </div>
  )
}

export default DashboardPage