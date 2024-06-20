import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';
import {chartdata} from "./chartdata"

const PosNegBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 20,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#517080" style={{fontSize:"0.8rem"}} />
        <YAxis yAxisId="right" orientation="right" stroke="#517080" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="amt" fill="#ff7300" />
        <Bar yAxisId="left" dataKey="pv" fill="#413ea0" />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#679719" r={0} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
const data = [
    {"name": "Page 1", "uv": -1365, "pv": 133, "amt": -1992},
    {"name": "Page 2", "uv": 212, "pv": 145, "amt": 1290},
    {"name": "Page 3", "uv": -886, "pv": 151, "amt": -751},
    {"name": "Page 4", "uv": -405, "pv": 179, "amt": 475},
    {"name": "Page 5", "uv": 106, "pv": 201, "amt": -1452},
    {"name": "Page 6", "uv": -1631, "pv": 207, "amt": -1190},
    {"name": "Page 7", "uv": 1789, "pv": 235, "amt": -909},
    {"name": "Page 8", "uv": -1500, "pv": 259, "amt": -1985},
    {"name": "Page 9", "uv": 1548, "pv": 263, "amt": -1438},
    {"name": "Page 10", "uv": -1996, "pv": 321, "amt": -1854},
    {"name": "Page 11", "uv": 1178, "pv": 358, "amt": -1874},
    {"name": "Page 12", "uv": -1447, "pv": 384, "amt": 314},
    {"name": "Page 13", "uv": 1140, "pv": 512, "amt": 1860},
    {"name": "Page 14", "uv": -777, "pv": 531, "amt": 1621},
    {"name": "Page 15", "uv": 801, "pv": 586, "amt": -863},
    {"name": "Page 16", "uv": -1341, "pv": 627, "amt": 1102},
    {"name": "Page 17", "uv": 675, "pv": 638, "amt": 719},
    {"name": "Page 18", "uv": -919, "pv": 663, "amt": -1360},
    {"name": "Page 19", "uv": 1236, "pv": 709, "amt": -1747},
    {"name": "Page 20", "uv": -409, "pv": 723, "amt": -837},
    {"name": "Page 21", "uv": 1677, "pv": 749, "amt": 808},
    {"name": "Page 22", "uv": -555, "pv": 755, "amt": 608},
    {"name": "Page 23", "uv": -167, "pv": 796, "amt": -829},
    {"name": "Page 24", "uv": 1455, "pv": 871, "amt": 1313},
    {"name": "Page 25", "uv": -939, "pv": 877, "amt": 813},
    {"name": "Page 26", "uv": 169, "pv": 948, "amt": -1547},
    {"name": "Page 27", "uv": -985, "pv": 954, "amt": -1010},
    {"name": "Page 28", "uv": 519, "pv": 975, "amt": -1459},
    {"name": "Page 29", "uv": 157, "pv": 987, "amt": 513},
    {"name": "Page 30", "uv": -867, "pv": 992, "amt": -427},
]

export default PosNegBarChart;
