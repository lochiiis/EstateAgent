//Results page displaying PropertyList

import React, {useState} from 'react'
import propertiesData from '../data/properties.json'
import SearchForm from './SearchForm'
import '../styles/Property.css'
import PropertyCard from './PropertyCard'
import {Link} from 'react-router-dom';
;



const SearchResults = () => {

    const[properties]=useState(propertiesData);
    const [filteredProperties, setFilteredProperties]=useState(propertiesData);
    const [favorites, setFavorites]=useState(()=>{
        //load favorites from local storage
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    const handleFavorite=(property)=>{
        const updatedFavorites= favorites.some((fav)=>fav.id===property.id) 
        ? favorites.filter((fav)=>fav.id!==property.id)
        : [...favorites, property];
        setFavorites(updatedFavorites);
        //save favorites to local storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const[showFavorites,setShowFavorites]=useState(false);

    const clearFavorites=()=> {
        setFavorites([]);
        localStorage.removeItem('favorites');
    };






    const handleSearch=(searchCriteria)=>{
    //filter properties based on search criteria
    const filtered=properties.filter(property=>{
        return(
        (searchCriteria.type==='Any' || property.type===searchCriteria.type) &&
        (searchCriteria.minPrice==='' || property.price>=searchCriteria.minPrice) &&
        (searchCriteria.maxPrice==='' || property.price<=searchCriteria.maxPrice) &&
        (searchCriteria.minBedrooms==='' || property.bedrooms>=searchCriteria.minBedrooms) &&
        (searchCriteria.maxBedrooms==='' || property.bedrooms<=searchCriteria.maxBedrooms) &&
        (searchCriteria.dateAdded==='' || property.dateAdded===searchCriteria.dateAdded) &&
        (searchCriteria.district==='All' || property.location.district===searchCriteria.district)
        );
    });
    //update state with filtered properties
    setFilteredProperties(filtered);
    }; 


    const handleDropFav=(event)=>{
        event.preventDefault();
        const propertyId=event.dataTransfer.getData('propertyId');
        //check item is being removed from favorites
        const favoriteToRemove=favorites.find(fav=>fav.id===propertyId);
        if(favoriteToRemove){
            handleFavorite(favoriteToRemove);
        }else{
            //if not found in favorites, add to favorites
            const propertyToAdd=properties.find(prop=>prop.id===propertyId);
            if(propertyToAdd){
                handleFavorite(propertyToAdd);
            }
        }
        
    };

    const handleDragOver=(event)=>{
        event.preventDefault(); //prevent default behaviour to allow dropping of items
    };





    return(
        <>

        <SearchForm onSearch={handleSearch}/>

        <button className="show-favorites-button" onClick={() => setShowFavorites(true)}>
            Show Favorites
        </button>
        
        
        <div className='properties-container'>
            {filteredProperties.map(property=>(
                <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={favorites.some((fav)=>fav.id===property.id)}
                    onClickFav={()=>handleFavorite(property)}
                    
                />
            ))}
        </div>
        {showFavorites && (
            <div 
                className={`favorites-sidebar ${showFavorites ? '' : 'hidden'}`}
                onDrop={handleDropFav}
                onDragOver={handleDragOver}
            >

                <div className='favorites-header'>
                    <button onClick={clearFavorites}className='clear-favorites'>
                    Clear All Favorites
                    </button>
                    <button className='close-button' onClick={()=>setShowFavorites(false)}>close</button>
                </div>
                <div className='favorites-drag-instructions'>
                    <p>Drag here to remove</p>
                </div>

                <h2>Your Favorites</h2>

                {favorites.length === 0 ? (
                    <p>Drag properties that suit your taste here</p>
                ) : (
                    <div>
                        {favorites.map(favorite=>(

                            <PropertyCard
                                key={favorite.id}
                                property={favorite}
                                isFavorite={true}
                                onClickFav={()=>handleFavorite(favorite)}
                            />


                        ))}
                    </div>
                          
                
                    
        )}
            <div>
            <Link to="/favorites"><button className='show-favorites-button'>View all favorites</button></Link>
            </div>
                
            </div>
        )}
        </>

    );

}
export default SearchResults;