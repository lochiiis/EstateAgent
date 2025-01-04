import React from "react";
import {Link} from 'react-router-dom';
import FavoritesButton from "./FavoritesButton";


const PropertyCard=({property,isFavorite,onClickFav})=>{
    const formatPrice=(price)=>{
        return 'LKR. '+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    
    return(
        <div 
            className ='property'
            draggable
            onDragStart={(event)=>event.dataTransfer.setData('propertyId',property.id)}
        >
            <div className='property-image-container'>
                <img src={property.mainImage} alt={property.title} className='property-image' loading='lazy'/>
                <FavoritesButton
                isFavorite={isFavorite}
                onClickFav={onClickFav}
                />
            </div>
            

            <div className='property-details'>
                <h3 className='property-title'><Link to={`/propertyDetails/${property.id}`}>{property.title}</Link></h3>
                <p className='short-description'>{property.shortDescription}</p>
                <div className="property-features">
                    <span className='bedrooms'>{property.bedrooms} Bedrooms</span>
                    <span className='type'>{property.type}</span>
                    <span className='district'>{property.location.district}</span>
                </div>

                <p className='price'>{formatPrice(property.price)}</p> 

            </div>

        </div>
    );
}
export default PropertyCard;