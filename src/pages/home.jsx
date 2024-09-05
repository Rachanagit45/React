import { useState } from "react";
import Navbar from "../components/navbar";
// import "../styles/home.css"; 

const Home = () => {
    // const [count, setCount] = useState(0);
    // const [animate, setAnimate] = useState(false)

    // const handleIncrement =() =>{
    //     startAnimation()
    //     setCount((prevCount)=> {
    //         return prevCount+1;
    //     })
    // }
    // const startAnimation=()=>{
    //     setAnimate(true)
    // }
    // const stopAnimation=()=>{
    //     setAnimate(false)
    // }

    return (
        <>
            <Navbar title={"Homepage"} />
            <h1>Homepage</h1>
            {/* <p id= "center-text" className={animate ? "text-change":""} onAnimationEnd={stopAnimation}>{count}</p>
            <div id ="button1" onClick={handleIncrement}>+</div> */}


        </>
    );
};

export default Home;
