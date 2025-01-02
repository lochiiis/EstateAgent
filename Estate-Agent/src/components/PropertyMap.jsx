// PropertyMap.js
import React from 'react';

const PropertyMap = ({ latitude, longitude }) => {
    const src = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    return (
        <div>
            <div style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height="600"
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
