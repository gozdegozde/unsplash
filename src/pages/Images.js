/* eslint-disable no-lone-blocks */
import ModalImage from "react-modal-image";
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
            console.log(response.data);

        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getRandomImage();
        //console.log('images',images);
    },[])

    //split images array to 4 array
    const imagesArray = images.reduce((result, value,index,image) => {
        if(index % 5 === 0){
            return[...result, image.slice(index, index + 5)];
        }
        return result
    }, []);

    console.log('imagesArray',imagesArray);

  
 
    {if(images.length === 0){
        return(
            <div>
                <>Page is loading...</>
            </div>
        )}else{
            return(
                <div className='row'>
                    {imagesArray.map((array) =>(
                        <div>
                            {array.map((img)=>(
                                <div >
                                    <ModalImage
                                    alt={img.alt_description}
                                    small={img.urls.small}
                                    hideDownload = {true}
                                    medium={img.urls.regular}
                                    className='column'   
                                    />
                                </div>
                                
                            ))}
                        </div>
                    ))}
                </div>
            )
        }
    }

}