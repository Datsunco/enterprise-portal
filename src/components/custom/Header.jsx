import React from 'react';
import {
    TableIcon,
    PlusIcon,
    DashboardIcon
  } from "@radix-ui/react-icons"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const Header = () => {
    return (
        <div className='h-[100vh] w-[80px] border-r-4 absolute'>
            <ToggleGroup type="single" >
                <div className="flex flex-col w-[100%]">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                 <DashboardIcon className="h-6 w-6"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <PlusIcon className="h-6 w-6"/>
                </ToggleGroupItem>
                <ToggleGroupItem className="hover:bg-sky-700" value="strikethrough" aria-label="Toggle strikethrough">
                    <TableIcon  className="h-6 w-6 "/>
                </ToggleGroupItem>
                </div>
            </ToggleGroup>
        </div>
    );
};

export default Header;