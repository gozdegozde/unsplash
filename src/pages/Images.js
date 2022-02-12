import axios from 'axios';
import { useState, useEffect } from 'react';
import './images.css';
export default function Images(){
    const [ images, setImages ] = useState([]);
    //accessKey for unsplash API
    const accessKey = "j4sp7j2VRnv_o4YtDkghuSPjTv8Lyhely8di5hrCfgQ";

    //getRandomImage : get random image from unsplash
    const getRandomImage = async () => {
        try{
            const response = await axios.get(`https://api.unsplash.com/photos/random/?count=20&client_id=${accessKey}`);
            setImages(response.data);

            //Check console
            console.log(images);

        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getRandomImage();
    },[])

}