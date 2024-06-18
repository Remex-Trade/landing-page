"use client"
import React, { ReactNode, useState } from 'react'
import ComposedLineAndBar from './Charts/ComposedLineAndBar'
import PosNegBarChart from './Charts/PosNegBarChart'
import StackedAndLine from './Charts/StackedAndLine'
import LineChartGraph from './Charts/LineChartGraph'
import ComposedLineChart from './Charts/ComposedLineChart'
import MultiLineChart from './Charts/MultiLineChart';
import MultiStackedChart from './Charts/MultiStackedChart'
import PieChart from './Charts/PieChart'
import TwoLineChart from './Charts/TwoLineChart'
import StackedComposedChart from './Charts/StackedComposedChart'
import BarChartGraph from './Charts/BarChart'
import ComposedArea from './Charts/ComposedArea'

const ChartBlock = ({title,data,type,text}:{title:string,data?:any,type:string,text?:string}) => {
    const [duration,setDuration] = useState(60);
    let chart:ReactNode;
    switch(type.toLowerCase()){
        case "composed":
            chart = <ComposedLineAndBar/>;
            break;
        case "posnegbar":
            chart =  <PosNegBarChart/>
            break;
        case "stackedline":
            chart = <StackedAndLine uppercolor="#6F29DF" lowercolor="#DDABF8" linecolor="#679719"/>
            break;
        case "stackedline2":
            chart = <StackedAndLine uppercolor="#ED615A" lowercolor="#96E21B" linecolor="#6226C6"/>
            break;
        case "stackedline3":
            chart = <StackedAndLine uppercolor="#F4C40E" lowercolor="#6F29DF" linecolor="#75AC19"/>
            break;
        case "line":
            chart = <LineChartGraph/>
            break;
        case "composedline":
            chart = <ComposedLineChart/>
            break;
        case "composedline2":
            chart = <ComposedArea/>
            break;
        case "multiline":
            chart = <MultiLineChart/>
            break;
        case "multistacked":
            chart = <MultiStackedChart/>
            break;
        case "pie":
            chart = <PieChart/>
            break;
        case "twoline":
            chart = <TwoLineChart/>
            break;
        case "stackedcomposed":
            chart = <StackedComposedChart uppercolor='#ED615A' lowercolor='#96E21B' linecolor='#6F29DF'/>
            break;
        case "bar":
            chart = <BarChartGraph/>
            break;
    }
  return (
    <div className='w-full h-[35rem] rounded-xl border-[0.2px] border-gray-800 px-6 py-3 flex flex-col gap-6 '>
        <div id="chart-heading" className='text-gray-500 font-bold text-lg flex justify-between items-center'>
            <span>
                {title}
            </span>
            <div className='flex gap-2 items-center'>
            <input type="number" value={duration} onChange={(e)=>setDuration(Number(e.target.value))} className='bg-transparent border border-gray-800 rounded-full px-4 py-1 text-gray-500 w-16 text-center outline-none'/>
            <span>days</span>
            </div>
        </div>
        {text &&
            <div className='text-4xl text-white '>
                {text}
            </div>
        }
        <div id="chart" className={`w-full ${text?"h-[25rem]":"h-[30rem]"}`}>
            {/* chart will be rendered here */}
            {chart}
        </div>
    </div>
  )
}

export default ChartBlock