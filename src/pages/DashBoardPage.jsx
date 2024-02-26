import React from 'react';
import Header from '../components/custom/Header';
import SalaryBarChart from '../components/custom/salaryChart';
import Example from '../components/custom/testChart';

const DashBoardPage = () => {
    return (
        <>
            <Header status={"dashboard"}/>
            <div className='p-[40px] ml-[80px] grid grid-rows-3 grid-flow-col gap-[20px]'>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <Example/>
            </div>
        </>
    );
};

export default DashBoardPage;