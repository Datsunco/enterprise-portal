import React from 'react';
import Header from '../components/custom/Header';

const DashBoardPage = () => {
    return (
        <>
            <Header status={"dashboard"}/>
            <div className='ml-[80px]'>
                Dashboard
            </div>
        </>
    );
};

export default DashBoardPage;