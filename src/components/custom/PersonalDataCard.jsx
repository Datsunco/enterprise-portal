import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const PersonalDataCard = () => {
    return (
        <div>
            <Card className="w-[370px] h-[400px]">
                <CardHeader>
                    <CardTitle>
                        Персональные данные
                    </CardTitle>
                    Персональные данные
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Имя</Label>
                                <Input id="name" placeholder="Антон" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="surname">Фамилия</Label>
                                <Input id="name" placeholder="Антон" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Отчество</Label>
                                <Input id="name" placeholder="Антон" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-[415px]">Подтвердить данные</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PersonalDataCard;