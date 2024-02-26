import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 5000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const data2 = [
    { salary: '30000', count: 10 },
    { salary: '40000', count: 20 },
    { salary: '50000', count: 50 },
    { salary: '60000', count: 80 },
    { salary: '70000', count: 65 },
    // ... другие данные
];

const testChart = () => {
    return (
        <LineChart
            background='#0000ff'
            fill='#0000ff'
            width={500}
            height={300}
            data={data2}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="salary" />
            {/* <YAxis />  */}
            <Tooltip />
            {/* <Legend /> */}
            {/* <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
            <Line type="monotone" dataKey="count" stroke="#82ca9d" activeDot={{ r: 5 }} />
        </LineChart>
    );
}

export default testChart;