
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartdata } from './chartdata';


 const LineChartGraph = ({data}:{data?:any})=>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={50}
          height={50}
          data={data?data:chartdata}//when data is coming through props use chartData else use default data
        >
        <XAxis dataKey="name"/>
        <YAxis dataKey="amt" stroke='#6B7280' tickCount={20} style={{fontSize:"0.8rem"}}></YAxis>
        <Tooltip/>
          <Line type="monotone" dataKey="pv" stroke="#679719" strokeWidth={3} r={0}  style={{
              filter: `drop-shadow(0px 5px 15px #6424CC`
            }}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }


export default LineChartGraph;