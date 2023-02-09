import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import homepageImg from '../assets/img/homepage-img.jpg';
import homepageImgMobile from '../assets/img/homepage-img-mobile.jpg';



const Home = () => {
    const [homeBackGroundImg, setHomeBackGroundImg] = useState('');
    
    useEffect(()=> {
        if(window.innerWidth < 600) {
            setHomeBackGroundImg(homepageImgMobile)
        } else {
            setHomeBackGroundImg(homepageImg)
        }
    },[])

  return (
    <div className={classes.div__container}>
        <img src={homeBackGroundImg} alt="homepage img" />
      <div className={classes.div__heading}>
          <h1>Book a Car Near You and Drive in Minutes</h1>
          <p>Book the selected car efortlessly, pay for driving only.</p>
        </div>
    </div>
  );
};

export default Home;
