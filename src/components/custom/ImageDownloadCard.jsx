import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ImageDownloadCard = () => {
    const [profileImg, setProfileImg] = useState('')
    let state = {
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }

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
                <img src={profileImg} />
            </CardContent>
        </Card>
    );
};

export default ImageDownloadCard;