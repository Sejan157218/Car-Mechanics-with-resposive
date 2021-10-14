import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const {bookinID} =useParams()
    return (
        <div>
            bokking {bookinID}
        </div>
    );
};

export default Booking;