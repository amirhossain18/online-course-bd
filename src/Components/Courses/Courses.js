import React, { useContext } from 'react';
import { CoursePrice } from '../../App';

const Courses = (props) => {
    const [price, setPrice] = useContext(CoursePrice)
    const data = props.course
    const handleAddCourse = () => {
        const coursePrice = parseFloat(data.price)
       setPrice(price + coursePrice)
       
     
    }
    return (
        <div className="single-course">
           <h2> Name: {data.name}</h2> 
           <h3 className="course-price">Course : {data.price}$</h3>
           <p><small>Author: {data.author}</small></p>
           <button className="course-button" onClick={handleAddCourse}> Confirm Now</button>
        </div>
    );
    
};

export default Courses;