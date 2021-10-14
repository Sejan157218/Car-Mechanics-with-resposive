import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css"

const Service = ({service}) => {
    // {service} = props
    const {name,price,description,img,id} = service;
    return (
        <div className="service-container pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : {price}</h3>
            <p>{description}</p>
            <Link to={`booking/${id}`}>
            <button className="btn-danger">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;