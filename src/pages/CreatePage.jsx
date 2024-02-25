import React from 'react';
import PersonalDataCard from '../components/custom/PersonalDataCard';
import DatePickerCard from '../components/custom/DatePickerCard';
import { EducationCard } from '../components/custom/EducationCard';
import WorkScheduleCard from '../components/custom/WorkScheduleCard';
import ImageDownloadCard from '../components/custom/ImageDownloadCard';
import SalaryCard from '../components/custom/SalaryCard';


const CreatePage = () => {
    return (
        <div className='padding-[40px] flex gap-[20px]' style={{ padding: "40px" }}>
            <div className='flex flex-col gap-[20px]'>
                <PersonalDataCard />
                {/* <SalaryCard/> */}
            </div>
            <div className='flex flex-col gap-[20px]'>
            <DatePickerCard />
                <EducationCard />
            </div>
            
            <WorkScheduleCard />
            <ImageDownloadCard/>
        </div>
    );
};

export default CreatePage;