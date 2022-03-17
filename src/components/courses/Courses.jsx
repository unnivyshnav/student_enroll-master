import React,{useEffect} from 'react';
import "./courses.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Course from '../course/Course'
function Courses({ courses }) {
   useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <>
       <div className="course-container">
      <h2 data-aos="fade-right">COURSES</h2>
      <p>We conduct various programs which leverages the link between industry and academia. The curriculum for individual course has been designed by a perfect blend of inputs from renowned academicians and industry experts from across the Globe.

The curriculum is more responsible to industry needs and provide the students with skills for employment and positive work values needed to meet the demands of the changing industry scenario and global environment.</p>
      <div className="courses" data-aos="zoom-out-down">
        {courses.map((c, key) => (
          <Course key={key} course={c} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Courses;
