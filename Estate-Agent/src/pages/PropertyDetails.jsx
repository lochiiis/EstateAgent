import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import PropertyGallery from '../components/PropertyGallery';
import PropertyMap from '../components/PropertyMap';
import '../styles/PropertyDetails.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const property = propertiesData.find(prop => prop.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    

    return (
        <>
            
            <div className='tab-container'>
                <div className="property-details-container">
                    <div className="property-main-image">
                        <PropertyGallery mainImage={property.mainImage} images={property.images}  />
                    </div>
                    <div className="property-details">
                        <h1>{property.title}</h1>
                    </div>
                </div>
                
                <CTabs activeItemKey="description">
                    <CTabList variant="tabs">
                        <CTab itemKey="description" className="tab-item">Description</CTab>
                        <CTab itemKey="floorplan" className="tab-item">Floor Plan</CTab>
                        <CTab itemKey="location" className="tab-item">Location</CTab>
                    </CTabList>

                    <CTabContent>

                        <CTabPanel  itemKey="description">
                            <p className="property-description">{property.longDescription}</p> 
                        </CTabPanel>


                        <CTabPanel itemKey="floorplan">
                            <img src={property.floorplan} alt="floorpan" className='floorplan' />
                        </CTabPanel>


                        <CTabPanel itemKey="location">
                            <PropertyMap
                                latitude={property.location.lat}
                                longitude={property.location.lng}
                                title={property.title}/>
                        
                        </CTabPanel>

                        
                    </CTabContent>
                </CTabs>
            
            </div>

        </>    

    );
};

export default PropertyDetails;
