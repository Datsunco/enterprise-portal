import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button';

const ImageDownloadCard = () => {
    const [profileImg, setProfileImg] = useState('')

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                console.log(reader.result)
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Персональные данные
                </CardTitle>
                Фотография
            </CardHeader>
            <CardContent>
                <Label htmlFor="picture">Picture</Label>
                <Input onChange={imageHandler} id="picture" type="file" />
                <img className="max-w-[250px] max-h-[250px] m-auto " src={profileImg} />
            </CardContent>
            <CardFooter>
                {profileImg ? 
                <Button className="w-[100%]">Подтвердить данные</Button>
                :
                null
            }
                    
                </CardFooter>
        </Card>
    );
};

export default ImageDownloadCard;