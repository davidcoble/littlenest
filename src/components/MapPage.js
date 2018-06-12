import React from 'react';

const MapPage = () => (
    <div className='content'>
        <h2>Map</h2>
        <p>Click on the marker to zoom and center!</p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.2893498394674!2d-122.33429318416019!3d47.7176329882942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490114f4933d69f%3A0xb516a38567955993!2s2150+N+122nd+St%2C+Seattle%2C+WA+98133!5e0!3m2!1sen!2sus!4v1528819027764"
            width="600" height="450" frameBorder="0" allowFullScreen></iframe>

    </div>
);

export default MapPage;
