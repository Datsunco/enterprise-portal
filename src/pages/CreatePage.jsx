import React from 'react';
import PersonalDataCard from '../components/custom/PersonalDataCard';
import DatePickerCard from '../components/custom/DatePickerCard';
import { EducationCard } from '../components/custom/EducationCard';
import WorkScheduleCard from '../components/custom/WorkScheduleCard';
import ImageDownloadCard from '../components/custom/ImageDownloadCard';
import SalaryCard from '../components/custom/SalaryCard';
import ContactsCard from '../components/custom/ContactsCard';
import AddressCard from '../components/custom/AddressCard';


const CreatePage = () => {
    return (
        //md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4
        <div className='padding-[40px] flex gap-[20px] ' style={{ padding: "40px" }}> 
            <div className='flex flex-col gap-[20px]'>
                <PersonalDataCard />
                {/* <SalaryCard/> */}
            </div>
            {/* space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4 */}
            <div className='flex flex-col gap-[20px]'>
                <DatePickerCard />
                <EducationCard />
            </div>
            {/* space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4 */}
            <div className='flex flex-col  gap-[20px]'>
                <AddressCard/>
                <ContactsCard />
            </div>

            <ImageDownloadCard />
        </div>
    );
};

export default CreatePage;