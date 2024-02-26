import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Предположим, у вас есть данные в следующем формате:
const data = [
    { salary: '30000', count: 10 },
    { salary: '40000', count: 20 },
    { salary: '50000', count: 50 },
    { salary: '60000', count: 80 },
    { salary: '70000', count: 65 },
    // ... другие данные
];

const SalaryBarChart  = () => (
    // <BarChart width={600} height={300} data={data}>
    //     <XAxis dataKey="salary" label={{ value: "Зарплата", position: "insideBottomRight", offset: 0 }} />
    //     <YAxis label={{ value: "Кол-во людей", angle: -90, position: "insideLeft" }} />
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="count" fill="#8884d8" />
    // </BarChart>
    <>
    test
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="salary" />
            <YAxis/>
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="line" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
    </>
);

export default SalaryBarChart;