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

const DatePickerCard = () => {
    const [date, setDate] = useState('')

    const setCorrectDate = (value) => {
        let digitsOnly = value.replace(/-/g, '');
        let formattedInput = digitsOnly.length > 8 ? digitsOnly.substr(0, 8) : digitsOnly;


        let result = '';
        for (let i = 0; i < formattedInput.length; i++) {
            result += formattedInput[i];
            if ((i === 1 || i === 3) && (i + 1 < formattedInput.length)) {
                result += '-';
            }
        }
        setDate(result)
        console.log(new Date(result), format(new Date(result), "dd-MM-yyyy"))
    }

    const setCorrectDate2 = (value) => {
        setDate(format(value, "dd-MM-yyyy"))
    }


    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Персональные данные
                    </CardTitle>
                    День рождения
                </CardHeader>
                <CardContent>
                    <Popover>
                        <PopoverTrigger >
                            <Input
                                variant={"outline"}
                                disabled={false}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    // !date && "text-muted-foreground"
                                )}
                                placeholder={'Введите дату'}
                                onChange={(e) => setCorrectDate(e.target.value)}
                                value={date ? date : date}
                            >

                            </Input>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setCorrectDate2}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </CardContent>
            </Card>
        </div>
    );
};

export default DatePickerCard;