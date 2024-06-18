import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from 'recharts';

// Sample data with 50 entries
const data = [
  { date: '2023-04-20', value1: 3.5, value2: 2.1, value3: 1.0 },
  { date: '2023-04-21', value1: 3.6, value2: 2.2, value3: 1.1 },
  { date: '2023-04-22', value1: 3.7, value2: 2.3, value3: 1.2 },
  // Add more data points here
  { date: '2023-05-20', value1: 4.5, value2: 3.1, value3: 2.0 },
  { date: '2023-05-21', value1: 4.6, value2: 3.2, value3: 2.1 },
  { date: '2023-05-22', value1: 4.7, value2: 3.3, value3: 2.2 },
  // Continue until you have at least 50 entries
  { date: '2023-06-10', value1: 6.5, value2: 4.5, value3: 3.5 },
  { date: '2023-06-11', value1: 7.5, value2: 5.5, value3: 4.5 },
  { date: '2023-06-12', value1: 8.5, value2: 6.5, value3: 5.5 },
];

const ComposedArea= () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis interval={0} tickCount={10} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="value1" stroke="#8884d8" fill="url(#colorValue1)" />
        <Area type="monotone" dataKey="value2" stroke="#82ca9d" fill="url(#colorValue2)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ComposedArea;
