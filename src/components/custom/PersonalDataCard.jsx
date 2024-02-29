import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const PersonalDataCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        faname: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCardData(formData));
        setFormData({
        });
    };

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
                                <Input
                                    onChange={handleChange}
                                    value={formData.name || ''}
                                    id="name"
                                    name="name"
                                    placeholder="Антон" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="surname">Фамилия</Label>
                                <Input
                                    id="surname"
                                    name="surname"
                                    placeholder="Антон"
                                    onChange={handleChange}
                                    value={formData.surname || ''} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="faname">Отчество</Label>
                                <Input
                                    id="faname"
                                    name="faname"
                                    placeholder="Антон"
                                    onChange={handleChange}
                                    value={formData.faname || ''}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-[415px]" onClick={handleSubmit}>Подтвердить данные</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PersonalDataCard;