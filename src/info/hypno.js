import React from "react";
import './acu.css'; 
import ReactPlayer from 'react-player';
import hypno from '../images copy/hypno.mp4';
import { Button } from'react-bootstrap';
import Benefits from "./benefits";
import Modalities from "./modalities";
const HYPNO = () => {
    return (
        <div className="container">
            <h1>Hypnotherapy</h1>
            <ReactPlayer
      url={hypno} // Replace with your video URL
      width='100%'
      height='400px'
      controls={true}
    />
      <Button variant="primary" href="https://www.green-hypnotherapy.com/" target="_blank">Visit Green Hypnotherapy</Button>  {/* Added Bootstrap Button */}
        <br></br>
        <Benefits />
        <br></br> 
        <Modalities />
        </div>
    )
}
export default HYPNO;
