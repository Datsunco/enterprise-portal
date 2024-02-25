import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"

const AddressCard = () => {
    const [date, setDate] = useState('')


    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Персональные данные
                    </CardTitle>
                    Адрес проживания
                </CardHeader>
                <CardContent>
                    <Input
                        variant={"outline"}
                        disabled={false}
                        className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            // !date && "text-muted-foreground"
                        )}
                        placeholder={'Введите адрес'}
                        onChange={(e) => setCorrectDate(e.target.value)}
                        value={date ? date : date}
                    >
                    </Input>

                </CardContent>
            </Card>
        </div>
    );
};

export default AddressCard;