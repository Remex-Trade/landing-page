import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';

// Sample data (use the data_without_negatives generated previously)
const chartdata = [
  {"name": "Page 1", "uv": 1365, "pv": 133, "amt": 1992},
  {"name": "Page 2", "uv": 212, "pv": 145, "amt": 1290},
  {"name": "Page 3", "uv": 886, "pv": 151, "amt": 751},
  {"name": "Page 4", "uv": 405, "pv": 179, "amt": 475},
  {"name": "Page 5", "uv": 106, "pv": 201, "amt": 1452},
  {"name": "Page 6", "uv": 1631, "pv": 207, "amt": 1190},
  {"name": "Page 7", "uv": 1789, "pv": 235, "amt": 909},
  {"name": "Page 8", "uv": 1500, "pv": 259, "amt": 1985},
  {"name": "Page 9", "uv": 1548, "pv": 263, "amt": 1438},
  {"name": "Page 10", "uv": 1996, "pv": 321, "amt": 1854},
  {"name": "Page 11", "uv": 1178, "pv": 358, "amt": 1874},
  {"name": "Page 12", "uv": 1447, "pv": 384, "amt": 314},
  {"name": "Page 13", "uv": 1140, "pv": 512, "amt": 1860},
  {"name": "Page 14", "uv": 777, "pv": 531, "amt": 1621},
  {"name": "Page 15", "uv": 801, "pv": 586, "amt": 863},
  {"name": "Page 16", "uv": 1341, "pv": 627, "amt": 1102},
  {"name": "Page 17", "uv": 675, "pv": 638, "amt": 719},
  {"name": "Page 18", "uv": 919, "pv": 663, "amt": 1360},
  {"name": "Page 19", "uv": 1236, "pv": 709, "amt": 1747},
  {"name": "Page 20", "uv": 409, "pv": 723, "amt": 837},
  {"name": "Page 21", "uv": 1677, "pv": 749, "amt": 808},
  {"name": "Page 22", "uv": 555, "pv": 755, "amt": 608},
  {"name": "Page 23", "uv": 167, "pv": 796, "amt": 829},
  {"name": "Page 24", "uv": 1455, "pv": 871, "amt": 1313},
  {"name": "Page 25", "uv": 939, "pv": 877, "amt": 813},
  {"name": "Page 26", "uv": 169, "pv": 948, "amt": 1547},
  {"name": "Page 27", "uv": 985, "pv": 954, "amt": 1010},
  {"name": "Page 28", "uv": 519, "pv": 975, "amt": 1459},
  {"name": "Page 29", "uv": 157, "pv": 987, "amt": 513},
  {"name": "Page 30", "uv": 867, "pv": 992, "amt": 427},
  {"name": "Page 31", "uv": 1206, "pv": 1111, "amt": 216},
  {"name": "Page 32", "uv": 1848, "pv": 1113, "amt": 990},
  {"name": "Page 33", "uv": 1690, "pv": 1126, "amt": 1601},
  {"name": "Page 34", "uv": 735, "pv": 1142, "amt": 324},
  {"name": "Page 35", "uv": 743, "pv": 1181, "amt": 1539},
  {"name": "Page 36", "uv": 200, "pv": 1209, "amt": 130},
  {"name": "Page 37", "uv": 648, "pv": 1228, "amt": 981},
  {"name": "Page 38", "uv": 1088, "pv": 1297, "amt": 295},
  {"name": "Page 39", "uv": 483, "pv": 1321, "amt": 371},
  {"name": "Page 40", "uv": 1259, "pv": 1354, "amt": 1675},
  {"name": "Page 41", "uv": 460, "pv": 1390, "amt": 1318},
  {"name": "Page 42", "uv": 277, "pv": 1420, "amt": 1668},
  {"name": "Page 43", "uv": 1917, "pv": 1435, "amt": 489},
  {"name": "Page 44", "uv": 482, "pv": 1448, "amt": 1735},
  {"name": "Page 45", "uv": 1294, "pv": 1465, "amt": 582},
  {"name": "Page 46", "uv": 224, "pv": 1532, "amt": 1143},
  {"name": "Page 47", "uv": 1475, "pv": 1573, "amt": 558},
  {"name": "Page 48", "uv": 654, "pv": 1649, "amt": 643},
  {"name": "Page 49", "uv": 548, "pv": 1713, "amt": 778},
  {"name": "Page 50", "uv": 1901, "pv": 1717, "amt": 1333},
  {"name": "Page 51", "uv": 1127, "pv": 1739, "amt": 1678},
  {"name": "Page 52", "uv": 1758, "pv": 1741, "amt": 1968},
  {"name": "Page 53", "uv": 916, "pv": 1767, "amt": 1681},
  {"name": "Page 54", "uv": 752, "pv": 1801, "amt": 1194},
  {"name": "Page 55", "uv": 1893, "pv": 1806, "amt": 1344},
  {"name": "Page 56", "uv": 670, "pv": 1864, "amt": 881},
  {"name": "Page 57", "uv": 171, "pv": 1865, "amt": 1387},
  {"name": "Page 58", "uv": 193, "pv": 1885, "amt": 1078},
  {"name": "Page 59", "uv": 967, "pv": 1916, "amt": 544},
  {"name": "Page 60", "uv": 1569, "pv": 1938, "amt": 1279}
];

const StackedComposedChart = ({data,uppercolor,lowercolor,linecolor}:{data?:any,uppercolor?:string,lowercolor?:string,linecolor?:string}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data?data:chartdata}
        margin={{
          top: 20,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#517080" tickCount={10} style={{fontSize:"0.8rem"}}/>
        <YAxis yAxisId="right" orientation="right" stroke="#517080" tickCount={10} style={{fontSize:"0.8rem"}} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="amt" stackId="a" fill={uppercolor}/> 
        <Bar yAxisId="left" dataKey="uv" stackId="a" fill={lowercolor}/> 
        <Line yAxisId="right" type="monotone" dataKey="amt" stroke={linecolor} strokeWidth={1} r={0}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default StackedComposedChart;
