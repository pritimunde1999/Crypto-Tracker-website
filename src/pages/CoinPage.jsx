
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header/Header';
import Loader from '../components/common/Loader/Loader';
import { coinObject } from '../functions/convertCoinData';
import List from '../components/dashboard/List/List';
import CoinInfo from '../components/coins/Coininfo/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/coins/LineChart/LineChart';
import SelectDays from '../components/coins/SelectDate/SelectDays';
import { settingChartData } from '../functions/settingChartData';

import GraphValuesTypeToggle from '../components/coins/GraphValuesType/GraphValuesType';

const CoinPage = () => {
    const { id } = useParams();
    const [isLoding, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(7)
    const [chartData, setChartData] = useState({});
    const [graphValuesType, setGraphValuesType] = useState('prices');

  


    useEffect(() => {
        getData()
    }, [id])

    async function getData() {
        const data = await getCoinData(id);
        

        if (data) {
            coinObject(setCoinData, data);
            const prices = await getCoinPrices(id, days,graphValuesType);
            
            if (prices.length > 0) {
                settingChartData(setChartData,prices,data.name)
                setIsLoading(false)
            }
            setIsLoading(false);
        }
    }


    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
       
        const prices = await getCoinPrices(id, event.target.value,graphValuesType);
        
        if (prices.length > 0) {
            settingChartData(setChartData,prices,coinData.name)
            setIsLoading(false)
        }
      };

      const handleGraphValueTypeChange = async (event, newType) => {
        setIsLoading(true);
        setGraphValuesType(newType);
        const prices = await getCoinPrices(id, days,newType);
        if (prices.length > 0) {
            settingChartData(setChartData,prices,coinData.name)
            setIsLoading(false)
        }
      };

    return (
        <div>
            <Header />
            {
                isLoding ? <Loader /> :
                    (
                        <>
                            <div className='coinData-wrapper'><List className='onlyListComp' coin={coinData} /></div>
                            <div className='coinData-wrapper'>
                                <SelectDays days={days} handleChange={handleDaysChange} noPtag={false}/>
                                <GraphValuesTypeToggle graphValuesType={graphValuesType} handleGraphValueTypeChange={handleGraphValueTypeChange}/>
                                <LineChart chartData={chartData} type={graphValuesType}/>
                            </div>
                            <CoinInfo heading={coinData.name} desc={coinData.desc} />
                           
                        </>
                    )
            }
        </div>
    )
}

export default CoinPage