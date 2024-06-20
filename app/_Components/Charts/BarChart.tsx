
import React from 'react';
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartdata } from './chartdata';


 const BarChartGraph = ({data}:{data?:any})=>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data?data:chartdata}//when data is coming through props use chartData else use default data
        >
        <XAxis dataKey="name"/>
        <YAxis dataKey="amt" stroke='#6B7280' tickCount={20} style={{fontSize:"0.8rem"}}></YAxis>
        <Tooltip/>
          <Bar type="monotone" dataKey="pv"  fill='#413EA0' r={0}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }


export default BarChartGraph;