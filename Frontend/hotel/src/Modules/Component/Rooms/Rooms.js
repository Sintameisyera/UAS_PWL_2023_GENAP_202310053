import React, { Component } from "react";
import "../Rooms/Rooms.css";
import rooms from "../../../Asset/rooms.png";
import srooms from "../../../Asset/srooms.png";
import drooms from "../../../Asset/drooms.png";

export default class Rooms extends Component {
  render() {
    return (
      <div className="Fcontainer">
        <img src={rooms} class="img-fluid rooms" alt="Rooms"></img>
        <div>
          <p className="df">Daftar Kamar</p>
        </div>

        <div className="srooms">
          <div className="single">
            <p>Single Rooms</p>
          </div>
          <img src={srooms} class="img-fluid srooms" alt="SingleRooms"></img>
        </div>
        <div className="prooms">
          <p>
            Single room adalah tipe kamar hotel yang paling umum.
            <br />
            Tipe kamar hotel ini terdiri dari satu single bed, sofa, dan kamar
            mandi.
            <br />
            Ukuran kamarnya juga tidak terlalu besar.
          </p>
        </div>

        
        <div className="drooms">
          <div className="double">
            <p>Double Rooms</p>
          </div>
          <img src={drooms} class="img-fluid drooms" alt="DoubleRooms"></img>
        </div>
        <div className="prooms">
          <p>
           Double room adalah salah satu tipe kamar yang paling
            <br />
            sering dipilih oleh pasangan suami istri saat sedang menginap.
            <br />
            yang menyediakan kasur berukuran besar.
          </p>
        </div>
        
        
      </div>
    );
  }
}
