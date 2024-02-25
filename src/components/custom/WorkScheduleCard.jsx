import React from 'react';
import { Bold, Italic, Underline } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const WorkScheduleCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Персональные данные
                </CardTitle>
                Рабочий график
            </CardHeader>
            <CardContent>
                <ToggleGroup type="single">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        5/2
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        2/2
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </CardContent>
        </Card>
    );
};

export default WorkScheduleCard;