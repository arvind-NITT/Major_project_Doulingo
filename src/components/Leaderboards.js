import React from "react";
import MySVG from "../images/660a07cd535396f03982f24bd0c3844a.svg";
import MySVboxG from "../images/df7eda7cc1cc833ba30cd1e82781b68f.svg";
import MySVboxss from "../images/Screenshot2024-10-041.png";
import MySVboxbottom from "../images/b4d50b5a518e587420bed74bcb381ac4.svg";
import MySVboxtop from "../images/64d0bbcd8f4e6d5018502540f1e0094b.svg";
const Leaderboards = () => {
  return (
    <div className="quest mt-4 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column  align-items-center">
        <img src={MySVG} alt="" />
        <h2 className="letter_Head">Unlock Leaderboards!</h2>

        <h5 className="letter_Head_below fw-sm m-1">
        Complete 10 more lessons to start competing
        </h5>
        <div className="large_buttons m-1">
          <div className=" d-grid ">
            <button
              type="button col-6"
              class="btn light_blue_button btn-lg "
            >
              START A LESSON
            </button>
          </div>
        </div>
      </div>

      <div className="w-100 ">
         <img style={{width:"100%"}} src={MySVboxss} alt="" />
      </div>
    </div>
  );
};

export default Leaderboards;
