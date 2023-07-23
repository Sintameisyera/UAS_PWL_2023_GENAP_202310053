import React, { Component } from "react";
import Bannerhome from "../../../Asset/bannerhome.png";
import "../Home/Home.css";
import Home2 from "./Home2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    return (
      <div className="Fcontainer">
        <img src={Bannerhome} class="img-fluid  " alt="Home"></img>
        <div className="Welcome">
          <p className="Welcometo">Welcome to</p>
          <p className="The">ELMEERA</p>
          <p className="Hotel">Hotel</p>
          <p className="Penjelasan">
            Menyajikan pemandangan Gunung Pangrango,
            <br />
            hotel modern kelas atas di kawasan Pecinan ini <br />
            berjarak 2 km dari Kebun Raya Bogor dan Istana <br />
            Bogor.
          </p>
          <p className="Scroll" >Scroll <br/><FontAwesomeIcon icon={faArrowAltCircleDown}/></p>
        </div>

        <div>
          <p className="fs">Fasilitas</p>
        </div>

        <div><Home2/></div>

      </div>
    );
  }
}
