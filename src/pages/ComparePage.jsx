import React, { useEffect, useState } from 'react'
import SelectCoins from '../components/compare/SelectCoins/SelectCoins'
import Header from '../components/common/Header/Header'
import SelectDays from '../components/coins/SelectDate/SelectDays'
import { coinObject } from '../functions/convertCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import { getCoinData } from '../functions/getCoinData'
import Loader from '../components/common/Loader/Loader'
import List from '../components/dashboard/List/List'
import CoinInfo from '../components/coins/Coininfo/CoinInfo'
import LineChart from '../components/coins/LineChart/LineChart'
import { settingChartData } from '../functions/settingChartData'
import GraphValuesTypeToggle from '../components/coins/GraphValuesType/GraphValuesType'

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState('bitcoin')
  const [crypto2, setCrypto2] = useState('ethereum')
  const [days, setDays] = useState(7);
  const [crypto1Data, setCrypto1Data] = useState({})
  const [crypto2Data, setCrypto2Data] = useState({})
  const [isLoding, setIsLoading] = useState(true);
  const [graphValuesType, setGraphValuesType] = useState('prices')
  const [chartData,setChartData] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true)
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, graphValuesType);
      const prices2 = await getCoinPrices(crypto2, days, graphValuesType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData,prices1,data1.name,prices2,data2.name)
        console.log("Both prices ", prices1, prices2)
        setIsLoading(false)
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true)
    if (isCoin2) {
      setCrypto2(event.target.value)
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, graphValuesType);
      const prices2 = await getCoinPrices(event.target.value, days, graphValuesType);
      settingChartData(setChartData,prices1,crypto1Data.name,prices2,data.name)
    }
    else {
      setCrypto1(event.target.value)
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(event.target.value, days, graphValuesType);
      const prices2 = await getCoinPrices(crypto2, days, graphValuesType);
      settingChartData(setChartData,prices1,data.name,prices2,crypto2Data.name)
    }

   
      setIsLoading(false)
    
  }

  const handleDaysChange = async(e) => {
    setIsLoading(true)
    setDays(e.target.value)
    const prices1 = await getCoinPrices(crypto1, e.target.value, graphValuesType);
    const prices2 = await getCoinPrices(crypto2, e.target.value, graphValuesType);
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData,prices1,crypto1Data.name,prices2,crypto2Data.name)
      setIsLoading(false)
    }
  }

  const handleGraphValueTypeChange = async (event, newType) => {
    setIsLoading(true);
    setGraphValuesType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData,prices1,crypto1Data.name,prices2,crypto2Data.name)
      setIsLoading(false)
    }
  };

  return (

    <div>
      <Header />
      {
        isLoding ? <Loader /> :
          <>
            <div className='coins-flex-compare'>
              <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
              <SelectDays days={days} handleChange={handleDaysChange} noPtag={true} />
            </div>

            <div className='coinData-wrapper'><List className='onlyListComp' coin={crypto1Data} /></div>
            <div className='coinData-wrapper'><List className='onlyListComp' coin={crypto2Data} /></div>

            <div className='coinData-wrapper'>
              <GraphValuesTypeToggle graphValuesType={graphValuesType} handleGraphValueTypeChange={handleGraphValueTypeChange} />
              <LineChart chartData={chartData} type={graphValuesType} multiAxis={true}/>
            </div>

            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          </>

      }
    </div>
  )
}

export default ComparePage