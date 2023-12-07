import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'
import { convertNumber } from '../../../functions/convertNumber';

const LineChart = ({chartData, type, multiAxis}) => {
   

    const options ={
       plugins:{
         legend:{
            display: multiAxis ? true : false,
         },
       },
       responsive: true,
       interaction : {
         mode :'index',
         intersect : false
       },
       scales: {
        y:{
            type: "linear",
            display: true,
            position: "left",
            ticks:{
                callback: function(value, index, ticks){
                    if(type==='prices')
                    {
                        return "$" + value.toLocaleString()
                    }
                    else if(type==='market_caps')
                    {
                        return '$' + convertNumber(value)
                    }
                    else{
                        return convertNumber(value)
                    }
                }
            }
        },
        y2: multiAxis && {
            type: "linear",
            display: true,
            position: "right",
            ticks: {
                callback: function(value, index, ticks){
                    if(type==='prices')
                    {
                        return "$" + value.toLocaleString()
                    }
                    else if(type==='market_caps')
                    {
                        return '$' + convertNumber(value)
                    }
                    else{
                        return convertNumber(value)
                    }
                }
            }
        }
       },
    };

  return <Line data={chartData} options={options}/>
}

export default LineChart