import React, { useEffect, useState } from 'react'
import { get100coins } from '../functions/get100coins';
import Loader from '../components/common/Loader/Loader';
import Header from '../components/common/Header/Header';
import { NavLink } from 'react-router-dom';
import Tabs from '../components/dashboard/Tabs/Tabs';

const WatchlistPage = () => {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setLoading(true);

    const coinData = await get100coins();

    if (coins) {
      setMyWatchlist(coinData.filter(item => coins.includes(item.id)))
    }

    setLoading(false);
  }



  return (
    <div>
      {
        loading || !coins ?
          <Loader />
          :
          (
            <div>
              {
                !myWatchlist || !coins ?
                  (
                    <div>
                      <Header />
                      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>No Items in the Watchlist!</h1>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <NavLink href="/dashboard">
                          <Button text={"Dashboard"} />
                        </NavLink>
                      </div>
                    </div>
                  )
                  :
                  (
                    <div >
                    <Header />
                    <Tabs coins={myWatchlist}  isWatchlistPage={true}/>
                  </div>
                  )
              }
            </div>
          )
      }
    </div>
  )
}

export default WatchlistPage