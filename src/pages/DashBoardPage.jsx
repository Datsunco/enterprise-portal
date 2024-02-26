import React from 'react';
import Header from '../components/custom/Header';
import SalaryCard from '../components/custom/SalaryCard';
import SalaryBarChart from '../components/custom/salaryChart';
import Example from '../components/custom/testChart';

const DashBoardPage = () => {
    return (
        <>
            <Header status={"dashboard"}/>
            <div className='ml-[80px]'>
                <Example/>
            </div>
        </>
    );
};

export default DashBoardPage;