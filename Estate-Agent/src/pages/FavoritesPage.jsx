import React, { useState, useEffect } from 'react';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    const clearFavorites = () => {
        setFavorites([]);
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
                            <div key={favorite.id} className='property'>
                                <img src={favorite.mainImage} alt={favorite.title} className='property-image' />
                                <div className='favorite-details'>
                                    <h3>{favorite.title}</h3>
                                    <p>{favorite.shortDescription}</p>
                                    <p>Rs {favorite.price}</p>
                                    <div className='remove-favorite'>
                                        <button className='remove-button' onClick={() => removeFavorite(favorite.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
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
