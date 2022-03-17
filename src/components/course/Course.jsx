import React,{useEffect} from 'react';
import "./course.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Course({ course }) {
   useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  const PF = "https://ictak-project.herokuapp.com/images/";
  return (
    <div className="course" data-aos="flip-down">
      <Link className="link" to={`/course/${course._id}`}>
        <div className="courseInfo">
          <img className="courseImg" src={PF + course.photo} alt="" />
      
          <span className="courseTitle">{course.name}</span>
        </div>
      </Link>
     
    </div>
  );
}

export default Course;
