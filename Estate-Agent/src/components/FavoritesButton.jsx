import React from "react";
import { Heart} from "lucide-react";
import '../styles/Property.css';

const FavoritesButton = ({isFavorite, onClickFav}) => {
    return(
      <button
        className='favorite-button'
        onClick={(e)=>{
          e.preventDefault();
          onClickFav();
        }}>

        {isFavorite ? <Heart fill='red' color="transparent"/> : <Heart color='white'/>}

      </button>
    );
}
export default FavoritesButton;