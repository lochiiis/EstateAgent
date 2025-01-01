import React,{useState} from 'react';
import '../styles/Property.css';
import { House,DollarSign,Bed,CalendarSearch,Search,MapPinHouse } from 'lucide-react';




//Form to enter search criteria
const SearchForm=({onSearch})=>{ 
    //setup state for search criteria
    const [type,setType]=useState('any');
    const [minPrice,setMinPrice]=useState('');
    const [maxPrice,setMaxPrice]=useState('');
    const [minBedrooms,setMinBedrooms]=useState('');
    const [maxBedrooms,setMaxBedrooms]=useState('');
    const [dateAdded,setDateAdded]=useState('');
    const [postcode,setPostcode]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        //call onSearch function with search criteria
        onSearch({type,minPrice,maxPrice,minBedrooms,maxBedrooms,dateAdded,postcode});
    };


  return (
    <>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='search-criteria'>
           <label><House className='icon'/> Property Type</label>
            <select 
            value={type} 
            onChange={e=>setType(e.target.value)} 
            >
                <option value="any">Any</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
            </select> 
        </div>


        <div className='search-criteria'>
            <label><DollarSign className='icon'/>Price Range</label>
            <div className='input-group'>
                <input 
                type="number" 
                name="minPrice"
                placeholder="Min Price"
                value={minPrice} 
                onChange={e=>setMinPrice(e.target.value)}
                />
                <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={maxPrice}
                onChange={e=>setMaxPrice(e.target.value)}
                />  
            </div>
            
        </div>


        <div className='search-criteria'>
            <label><Bed className='icon'/> Bedrooms</label>

            <div className='input-group'>
                <input 
                type="number"
                name="minBedrooms"
                placeholder="Min Bedrooms"
                value={minBedrooms}
                onChange={e=>setMinBedrooms(e.target.value)}
                />
                <input 
                type="number"
                name="maxBedrooms"
                placeholder="Max Bedrooms"
                value={maxBedrooms}
                onChange={e=>setMaxBedrooms(e.target.value)}
                />
            </div>
            
        </div>



        <div className='search-criteria'>
            <label><CalendarSearch className='icon'/> Date Added</label>
            <input 
            type="date"
            name="dateAdded"
            value={dateAdded}
            onChange={e=>setDateAdded(e.target.value)}
            />
        </div>


        <div className='search-criteria'>
            <label><MapPinHouse className='icon'/>Postcode Area</label>
            <input 
            type="text"
            name="postcode"
            placeholder="e.g. BR1, NW1"
            value={postcode}
            onChange={e=>setPostcode(e.target.value)}
            />
            

        </div>

        <div className='search-criteria'>
            <button type="submit" className='submit-button'><Search className='icon'/>Search</button>
        </div>

    </form>
    </>
  );
}
export default SearchForm;