import React from "react";
import MySVG from '../images/2b5a211d830a24fab92e291d50f65d1d.svg'
import MySVboxG from "../images/df7eda7cc1cc833ba30cd1e82781b68f.svg";
import MySVboxbottom from "../images/b4d50b5a518e587420bed74bcb381ac4.svg";
import MySVboxtop from "../images/64d0bbcd8f4e6d5018502540f1e0094b.svg";
const Quests = () => {
  return (
    <div className="quest mt-4 d-flex flex-column justify-content-center align-items-center">
      <div
        className="quest_for_welcome  rounded-4"
        style={{ backgroundColor: "rgb(144, 105, 205)" }}
      >
        <div className="d-flex flex-column justify-content-start align-items-start">
          <h4 className="m-3 fw-bold text-dark">
            Welcome!
          </h4>
          <span className="m-3 text-dark text-start">
          Complete quests to earn rewards! Quests refresh every day.
          </span>

        </div>
        <div>
          <img src={MySVboxtop} alt="" />
        </div>
      </div>

      <div className="w-75 ">
        <div className="d-flex mt-4 justify-content-between w-100">
          <h3 className="fw-bold">
            Daily Quest
          </h3>
          <h3>
            12 Hours
          </h3>

        </div>
        <div className="container border border-2 border-dark rounded-4 p-3 mt-2 ">
          <div className="d-flex mt-3 mb-3">
            <div className="w-25">
              <img src={MySVG} alt="" srcset="" />
            </div>
            <div className="text-wrap text-start text_Inside_right_div w-75 fw-bold">
              Earn 10 XP
              <div className="scorebarmain">
                <span className="col-12 text-secondary text-center" style={{marginTop:'-3px'}}>0/10</span>
                <img className="d-flex align-self-end" src={MySVboxG} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container border border-2 border-dark rounded-4 p-3 mt-2 ">
          <div className="d-flex mt-3 mb-3">
            <div className="w-25">
              <img style={{margin: "3px 5px -5px -8px"}} src={MySVboxbottom} alt="" srcset="" />
            </div>
            <div className=" d-flex justify-content-start align-items-center text-wrap text-center text_Inside_right_div w-75 fw-bold" >
            More quests unlock soon
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
