import React,{useState} from 'react';
import '../styles/Property.css';
import { House,Banknote,Bed,CalendarSearch,Search,MapPinHouse } from 'lucide-react';

import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'



//Form to enter search criteria
const SearchForm=({onSearch})=>{ 
    //setup state for search criteria
    const [type,setType]=useState('Any');
    const [minPrice,setMinPrice]=useState('');
    const [maxPrice,setMaxPrice]=useState('');
    const [minBedrooms,setMinBedrooms]=useState('');
    const [maxBedrooms,setMaxBedrooms]=useState('');
    const [dateAdded,setDateAdded]=useState('');
    const [district,setDistrict]=useState('All');

    const handleSubmit=(e)=>{
        e.preventDefault();
        //call onSearch function with search criteria
        onSearch({type,minPrice,maxPrice,minBedrooms,maxBedrooms,dateAdded,district});
    };


  return (
    <>
      <form onSubmit={handleSubmit} className='form-container'>
        
        <div className='search-criteria'>
           <label><House className='icon'/> Property Type</label>

            <CDropdown>
                <CDropdownToggle caret className='type-dropdown'>
                    {type}
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={()=>setType('Any')}>Any</CDropdownItem>
                    <CDropdownItem onClick={()=>setType('House')}>House</CDropdownItem>
                    <CDropdownItem onClick={()=>setType('Apartment')}>Apartment</CDropdownItem>
                    <CDropdownItem onClick={()=>setType('Villa')}>Villa</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>

        </div>


        <div className='search-criteria'>
            <label><Banknote className='icon'/>Price Range</label>
            <div className='input-group'>
                <input 
                type="number" 
                name="minPrice"
                placeholder="Min Price"
                value={minPrice} 
                onChange={e=>setMinPrice(e.target.value)}
                min="1"
                />
                <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={maxPrice}
                onChange={e=>setMaxPrice(e.target.value)}
                min="1"
                
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
            <label><MapPinHouse className='icon'/>District</label>
 
                    
            <CDropdown>
                <CDropdownToggle caret className='district-dropdown'>   
                    {district}
                </CDropdownToggle>
                <CDropdownMenu >
                    <CDropdownItem onClick={()=>setDistrict('All')}>All</CDropdownItem>
                    <CDropdownItem onClick={()=>setDistrict('Colombo')}>Colombo</CDropdownItem>
                    <CDropdownItem onClick={()=>setDistrict('Galle')}>Galle</CDropdownItem>
                    <CDropdownItem onClick={()=>setDistrict('Kandy')}>Kandy</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            

        </div>

        <div className='search-criteria'>
            <button type="submit" className='submit-button'><Search className='icon'/>Search</button>
        </div>

    </form>
    </>
  );
}
export default SearchForm;