import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import PropertyGallery from '../components/PropertyGallery';

const PropertyDetails = () => {
    const { id } = useParams();
    const property = propertiesData.find(prop => prop.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    

    return (
        <>
            
            <div className='tab-container'>
                <div className="property-main-image">
                    <PropertyGallery mainImage={property.mainImage} images={property.images}  />
                </div>
                <div className="property-details">
                    <h1>{property.title}</h1>
                </div>
                
                <CTabs activeItemKey="description">
                    <CTabList variant="tabs">
                        <CTab itemKey="description" className="tab-item">Description</CTab>
                        <CTab itemKey="floorplan" className="tab-item">Floor Plan</CTab>
                        <CTab itemKey="location" className="tab-item">Location</CTab>
                    </CTabList>

                    <CTabContent>

                        <CTabPanel className="" itemKey="description">
                            <p>{property.longDescription}</p> 
                        </CTabPanel>


                        <CTabPanel className="" itemKey="floorplan">
                            <img src={property.floorplan} alt="floorpan" className='floorplan' />
                        </CTabPanel>


                        <CTabPanel className="" itemKey="location">
                            loco
                        </CTabPanel>

                        
                    </CTabContent>
                </CTabs>
            
            </div>

        </>    

    );
};

export default PropertyDetails;
