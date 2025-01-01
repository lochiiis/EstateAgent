// property gallery in details

import { useState } from "react";

const PropertyGallery = ({mainImage,images}) => {

    
        const[selectedImage, setSelectedImage]=useState(mainImage);

        const handleThumbnailClick=(image)=>{
            setSelectedImage(image);
        }
    

        return(
            <div className="property-images">
                <div className="large-image">
                    <img src={selectedImage} alt="main" className="property-main-image"/>
                </div>

                <div className="thumbnail-container">
                    {images.map((image,index)=>(
                        <img
                            key={index}
                            src={image}
                            alt={`thumbnail-${index+1}`}
                            className="property-thumbnail"
                            onClick={()=>handleThumbnailClick(image)}
                        />
                    ))}
                </div>
                
            </div>
        );
}

export default PropertyGallery;
