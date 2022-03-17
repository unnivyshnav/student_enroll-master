import React,{useEffect} from 'react';
import { Button } from '../button/Button'
import './FrontSection.css';
import Aos from "aos";
import "aos/dist/aos.css";

function FrontSection() {
    useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className='main-container'>
      <div className="main-titles">
<h1 data-aos="fade-right"> ICT ACADEMY</h1>
      < p  data-aos="zoom-out-down"> Industry focused ICT skills development programmes
      for students </p>
      </div>
      
      <div className='main-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick='/Courses'
        >
          Go through our courses >
        </Button>
      </div>
    </div>
  );
}

export default FrontSection;
