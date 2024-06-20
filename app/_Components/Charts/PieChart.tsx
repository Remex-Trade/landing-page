import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'ETH', value: 150083081.517 },
  { name: 'BTC', value: 191113660.924 },
  { name: 'SOL', value: 32703930.418 },
  { name: 'BNB', value: 15408383.168 },
  { name: 'ARB', value: 4444344.41 },
  { name: 'DOGE', value: 7885899.457 },
  { name: 'AVAX', value: 6458729.103 },
  { name: 'OP', value: 2298215.048 },
  { name: 'MATIC', value: 5166896.193 },
  { name: 'TIA', value: 4030959.06 },
  { name: 'SEI', value: 10315100.197 },
  { name: 'EUR', value: 12695069.747 },
  { name: 'JPY', value: 11564216.957 },
  { name: 'GBP', value: 1195553.207 },
  { name: 'CAD', value: 8255438.598 },
  { name: 'CHF', value: 417090.292 },
  { name: 'SEK', value: 1888929.517 }
];

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000',
  '#800000', '#808000', '#008000', '#800080', '#000080',
  '#808080', '#FFFF00', '#00FFFF', '#FF00FF', '#0000FF',
  '#A52A2A', '#D2691E'
];

const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent, index
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const MyPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        labelLine={false}
        innerRadius={70}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      {/* <Legend /> */}
    </PieChart>
    </ResponsiveContainer>
  );
}

export default MyPieChart;
