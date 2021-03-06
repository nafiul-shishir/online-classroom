import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Course.css';

const Course = (props) => {
    const{name,price} = props.course;
    const handleAddCourse = props.handleAddCourse
    return (
        
        <div className="course-info">
            <h4> {name} </h4>
            <p> <small> price: {price}</small></p>

            <button className="main-btn" onClick={() => handleAddCourse(props.course)}> <FontAwesomeIcon icon={faShoppingBasket} /> Enroll Now</button>
        </div>
    );
};

export default Course;