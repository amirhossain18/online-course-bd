import React, { useState, useEffect, useContext } from 'react';
import data from '../../data/data.json'
import style from './Course.css'
import Courses from '../Courses/Courses'
import {CoursePrice} from '../../App'


const Course = (props) => {
    const [price, setPrice] = useContext(CoursePrice)
    console.log(price)

    const [courses, setCourses] = useState([]);
    
    useEffect( () =>{
          setCourses(data);
          

    } ,[])
  
   
    return (
        <div className="course-section">
         
            <div className='main-border'>
                <div className="courses">
                    {
                        courses.map(course => <Courses course={course}></Courses>)
                    }
                </div>
            </div>

            <div className ='order-cart'>
                <h3>This is cart</h3>
                <p>Total Price: {price}$</p>
                <button className="course-button">Add to checkout</button>
            </div>
        
        
</div>
    );
};

export default Course;