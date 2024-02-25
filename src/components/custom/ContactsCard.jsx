import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ContactsCard = () => {
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        let onlyNums = value.replace(/[^\d]/g, ''); // Удаляем все символы, кроме цифр
        if (onlyNums.length > 11) {
            onlyNums = onlyNums.slice(0, 11); // Ограничиваем длину номера 11 цифрами
        }

        // Добавляем +7, скобки и тире для российского формата: +7 (XXX) XXX-XX-XX
        const formattedPhone = onlyNums.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');
        setPhone(formattedPhone);
    };

    // Обработка удаления символов
    const handleBackspace = (event) => {
        if (event.key === 'Backspace' && phone.length === 2) {
            setPhone('');
        }
    };

    return (
        <div>
            <Card className="w-[370px]">
                <CardHeader>
                    <CardTitle>
                        Персональные данные
                    </CardTitle>
                    Котнактные данные
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Телефон</Label>
                                <Input id="name"
                                    value={phone}
                                    onChange={handleChange}
                                    onKeyDown={handleBackspace}
                                    placeholder="Введите телефонный номер"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Электронная почта</Label>
                                <Input id="name" placeholder="Введите электронную почту" />
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

export default ContactsCard;