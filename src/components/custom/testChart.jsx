import React, { PureComponent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PolarGrid } from 'recharts';


const data2 = [
    { salary: '30000', count: 10 },
    { salary: '40000', count: 20 },
    { salary: '50000', count: 50 },
    { salary: '60000', count: 80 },
    { salary: '70000', count: 65 },
    // ... другие данные
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div style={{
                backgroundColor: '#fff',
                padding: '5px',
                border: '1px solid #ccc', 
                borderRadius: '10px', 

            }}>
                <p>{'Salary   Count'}</p>
                <p>{`${data.salary} ${data.count}`}</p>
            </div>
        );
    }

    return null;
};

const testChart = () => {
    return (
        <Card className='w-[600px]'>
            <CardHeader>
                <CardTitle>
                    График зарплат
                </CardTitle>
                <CardDescription>
                    На графике представлено распределение уровня зарплат по списку
                </CardDescription>
            </CardHeader>
            <CardContent>
        <LineChart
            background='#0000ff'
            fill='#0000ff'
            width={500}
            height={150}
            data={data2}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <Tooltip content={<CustomTooltip />} width='500px' />
            <Line strokeWidth={2.5} type="monotone" dataKey="count" stroke="#000000" activeDot={{ r: 5 }} />
        </LineChart>
        </CardContent>
        </Card>
    );
}

export default testChart;