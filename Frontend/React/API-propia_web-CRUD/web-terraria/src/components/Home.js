import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import npcImage from "../assets/npcImage.png";
import armaImage from "../assets/armaImage.png";
import armaduraImage from "../assets/armaduraImage.png";
import bossImage from "../assets/bossImage.png";
import biomaImage from "../assets/biomaImage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container containerHome my-5">
      <div className="row justify-content-center">
        <div className="col-6 col-md-4 m-2 text-center caja">
          <Link to="/npc" className="link-custom">
            <img src={npcImage} alt="NPC"></img>
            <h6 className="mt-2">NPCs</h6>
          </Link>
        </div>
        <div className="col-6 col-md-4 m-2 text-center caja">
          <Link to="/armaduras" className="link-custom">
            <img src={armaduraImage} alt="Armaduras"></img>
            <h6 className="mt-2">Armaduras</h6>
          </Link>
        </div>
        <div className="col-6 col-md-4 m-2 text-center caja">
          <Link to="/armas" className="link-custom">
            <img src={armaImage} alt="NPC"></img>
            <h6 className="mt-2">Armas</h6>
          </Link>
        </div>
        <div className="col-6 col-md-4 m-2 text-center caja">
          <Link to="/bosses" className="link-custom">
            <img src={bossImage} alt="Bosses"></img>
            <h6 className="mt-2">Bosses</h6>
          </Link>
        </div>
        <div className="col-6 col-md-4 m-2 text-center caja">
          <Link to="/biomas" className="link-custom">
            <img src={biomaImage} alt="Biomas"></img>
            <h6 className="mt-2">Biomas</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
