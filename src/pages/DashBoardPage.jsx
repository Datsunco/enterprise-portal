import React from 'react';
import Header from '../components/custom/Header';
import SalaryBarChart from '../components/custom/salaryChart';
import Schedule from '../components/custom/ScheduleChart';

const DashBoardPage = () => {
    return (
        <>
            <Header status={"dashboard"}/>
            <div className='p-[40px] ml-[80px] grid grid-rows-3 grid-flow-col gap-[20px]'>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <SalaryBarChart/>
                <Schedule/>
            </div>
        </>
    );
};

export default DashBoardPage;