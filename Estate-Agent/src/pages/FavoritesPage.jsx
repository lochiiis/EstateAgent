import React, { useState, useEffect } from 'react';
import '../styles/FavoritesPage.css';
import PropertyCard from '../components/PropertyCard';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(updatedFavorites);
    };

    const clearFavorites = () => {
        setFavorites([]);
        localStorage.removeItem('favorites');
    };

    return (
        <div className='favorites-container'>
            <h2>Your Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorite properties yet!</p>
            ) : (
                <>
                    <div className='favProp-container'>
                        {favorites.map(favorite => (
                            
                            <PropertyCard
                                key={favorite.id}
                                property={favorite}
                                isFavorite={true}
                                onClickFav={() => removeFavorite(favorite.id)}
                            />
                    
                        ))}
                    </div>
                    <button onClick={clearFavorites} className='clear-favorites'>
                        Clear All Favorites
                    </button>
                </>
            )}
        </div>
    );
};

export default FavoritesPage;
