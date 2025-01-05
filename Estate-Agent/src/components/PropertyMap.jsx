import React from 'react';

//displays the location of the property on a map
const PropertyMap = ({ latitude, longitude }) => {
    const src = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    return (
        <div>
            <div style={{ width: '100%', height: 'auto', margin: '2%' }}>
                <iframe
                    width="90%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={src}
                >
                </iframe>
            </div>
        </div>
    );
};

export default PropertyMap;
