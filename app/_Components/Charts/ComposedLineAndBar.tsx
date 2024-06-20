import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {chartdata} from "./chartdata";



const ComposedLineAndBar = ({data}:{data?:any})=>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data?data:chartdata}
          margin={{
            top:20
          }}
        >
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="pv" r={0} stroke="#679719" strokeWidth={1.4} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
 


  export default ComposedLineAndBar;
