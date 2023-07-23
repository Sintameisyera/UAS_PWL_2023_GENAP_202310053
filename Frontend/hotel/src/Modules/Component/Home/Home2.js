import React, { Component } from "react";
import "../Home/Home.css";
import gym from "../../../Asset/gym.png";
import kolam from "../../../Asset/kolam.jpg";

export default class Home2 extends Component {
  render() {
    return (
        <div>
        <div className="pgym" id="menufasilitas">
         <img src={gym} class="img-fluid gym" alt="Gym"></img>
         <div className="KotakG">
           <p>Gym</p>
         </div>
       </div>

       <div className="kolam">
         <img src={kolam} class="img-fluid kolam" alt="kolam"></img>
         <div className="kotakK">
           <p>Kolam Renang</p>
         </div>
       </div>
   </div>
    )
  }
}


