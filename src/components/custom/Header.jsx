import React from 'react';
import {
    TableIcon,
    PlusIcon,
    DashboardIcon
} from "@radix-ui/react-icons"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useNavigate } from 'react-router-dom';

const Header = ({status}) => {
    const navigate = useNavigate()

    const onTableClick = () => {
        navigate('/table')
    }

    const onDashClick = () => {
        navigate('/dash')
    }

    const onAddClick = () => {
        navigate('/main')
    }

    return (
        
        <div className='h-[100vh] w-[80px] border-r-4 absolute'>
            <ToggleGroup type="single" defaultValue={status}>
                <div className="flex flex-col w-[100%]">

                    <TooltipProvider delayDuration={100} sideOffset={200}>
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem onClick={() => onDashClick()} className="rounded-none h-[100px] w-[100%]" value="dashboard" aria-label="Toggle bold">
                                    <DashboardIcon className="h-6 w-6" />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent side='left' >
                                <p>Dashboard</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider  delayDuration={100} sideOffset={200}>
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem onClick={() => onAddClick()} className="rounded-none h-[100px] w-[100%]" value="plus" aria-label="Toggle italic">
                                    <PlusIcon className="h-6 w-6" />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent side='left' >
                                <p>Добавить человека</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider  delayDuration={100} sideOffset={200}>
                        <Tooltip>
                            <TooltipTrigger>
                                <ToggleGroupItem onClick={() => onTableClick()} className="rounded-none h-[100px] w-[100%]" value="table" aria-label="Toggle strikethrough">
                                    <TableIcon className="h-6 w-6 " />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent side='left' >
                                <p>Таблица</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>



                </div>
            </ToggleGroup>
        </div>
    );
};

export default Header;