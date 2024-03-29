import React from "react";
import crew1 from "../Assets/crew1.png";
import crew2 from "../Assets/crew2.png";
import crew3 from "../Assets/crew3.png";
import crew4 from "../Assets/crew4.png";
import crew5 from "../Assets/crew5.png";
import crew6 from "../Assets/crew6.png";
import "../Styles/TeamStyle.css";

const Team = () => {
  return (
    <div className="teamcontainer">
      <div className="crewcontainer">
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew1} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Hasan DAĞLAR</h5>
            <h6>Satış Sorumlusu</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew2} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Cemil SEZGİN</h5>
            <h6>Güvenlik</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew3} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Ayça ELİF</h5>
            <h6>Müşteri Hizmetleri</h6>
          </div>
        </div>
      </div>
      <div className="crewcontainer">
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew4} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>İpek MUSLU</h5>
            <h6>Satış Sorumlusu</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew5} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Hakan ÇANAK</h5>
            <h6>Vezne</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew6} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Çiğdem TÜRK</h5>
            <h6>Sekreter</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
