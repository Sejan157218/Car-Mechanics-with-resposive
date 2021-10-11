import React from 'react';
import "./service.css"

const Service = ({service}) => {
    // {service} = props
    const {name,price,description,img} = service;
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : {price}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;