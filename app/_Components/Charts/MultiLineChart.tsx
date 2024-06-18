import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const data = [
    { date: '04-20', ETH: 0.016, BTC: 0.011, SOL: 0.077, BNB: 0.111, ARB: 0.054, DOGE: 0.022, AVAX: 0.106, OP: 0.158, MATIC: 0.104, TIA: 0.208, SEI: 0.245, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-21', ETH: 0.015, BTC: 0.010, SOL: 0.075, BNB: 0.110, ARB: 0.050, DOGE: 0.020, AVAX: 0.100, OP: 0.150, MATIC: 0.100, TIA: 0.200, SEI: 0.240, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-22', ETH: 0.017, BTC: 0.012, SOL: 0.078, BNB: 0.112, ARB: 0.055, DOGE: 0.023, AVAX: 0.107, OP: 0.160, MATIC: 0.105, TIA: 0.210, SEI: 0.246, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-23', ETH: 0.018, BTC: 0.013, SOL: 0.079, BNB: 0.113, ARB: 0.056, DOGE: 0.024, AVAX: 0.108, OP: 0.162, MATIC: 0.106, TIA: 0.211, SEI: 0.247, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-24', ETH: 0.019, BTC: 0.014, SOL: 0.080, BNB: 0.114, ARB: 0.057, DOGE: 0.025, AVAX: 0.109, OP: 0.164, MATIC: 0.107, TIA: 0.212, SEI: 0.248, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-25', ETH: 0.020, BTC: 0.015, SOL: 0.081, BNB: 0.115, ARB: 0.058, DOGE: 0.026, AVAX: 0.110, OP: 0.166, MATIC: 0.108, TIA: 0.213, SEI: 0.249, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-26', ETH: 0.021, BTC: 0.016, SOL: 0.082, BNB: 0.116, ARB: 0.059, DOGE: 0.027, AVAX: 0.111, OP: 0.168, MATIC: 0.109, TIA: 0.214, SEI: 0.250, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-27', ETH: 0.022, BTC: 0.017, SOL: 0.083, BNB: 0.117, ARB: 0.060, DOGE: 0.028, AVAX: 0.112, OP: 0.170, MATIC: 0.110, TIA: 0.215, SEI: 0.251, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-28', ETH: 0.023, BTC: 0.018, SOL: 0.084, BNB: 0.118, ARB: 0.061, DOGE: 0.029, AVAX: 0.113, OP: 0.172, MATIC: 0.111, TIA: 0.216, SEI: 0.252, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 },
    { date: '04-29', ETH: 0.024, BTC: 0.019, SOL: 0.085, BNB: 0.119, ARB: 0.062, DOGE: 0.030, AVAX: 0.114, OP: 0.174, MATIC: 0.112, TIA: 0.217, SEI: 0.253, EUR: 0, JPY: 0, GBP: 0, CAD: 0, CHF: 0, SEK: 0 }
  ];

const COLORS = {
  ETH: '#ff7300',
  BTC: '#387908',
  SOL: '#8884d8',
  BNB: '#82ca9d',
  ARB: '#ffc658',
  DOGE: '#ff0000',
  AVAX: '#00ff00',
  OP: '#0000ff',
  MATIC: '#00ffff',
  TIA: '#ff00ff',
  SEI: '#ffff00',
  EUR: '#000000',
  JPY: '#ff8080',
  GBP: '#80ff80',
  CAD: '#8080ff',
  CHF: '#800080',
  SEK: '#808080',
};
type payloadType ={
    color:string,
    name:string,
    value:number
}
const CustomTooltip = ({ payload, label }:{ payload?:payloadType[], label?:string }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[#0c0f11] border border-gray-800 ">
        <p className="label">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const MarginFeeChart = () => (
  <ResponsiveContainer width="100%" height="100%" style={{fontSize:"0.7rem"}}>
    <LineChart
      data={data}
      margin={{
        top: 20
      }}
    >
      
      <XAxis dataKey="date" />
      <YAxis tickCount={20}domain={[0, 0.7]}/>
      <Tooltip content={<CustomTooltip />}/>
      {/* <Legend /> */}
      {Object.keys(COLORS).map((key) => (
        <Line key={key} type="monotone" dataKey={key} stroke={COLORS[key]} r={0}/>
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default MarginFeeChart;
