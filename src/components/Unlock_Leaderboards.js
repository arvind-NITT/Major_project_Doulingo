import React from "react";
import MySVG from "../images/d4280fdf64d66de7390fe84802432a53 (1).svg";
const Unlock_Leaderboards = () => {
  return (
    <div className="container border border-2 border-dark rounded-4 p-3 m-2 w-75">
      <div className="d-flex">
        <h5>Unlock Leaderboards</h5>
      </div>
      <div className="d-flex mt-3 mb-3">
        <div className="w-25">
          <img src={MySVG} alt="" srcset="" />
        </div>
        <div className="text-wrap text_Inside_right_div w-75">
          Complete 10 more lessons to start competing
        </div>
      </div>
    </div>
  );
};

export default Unlock_Leaderboards;
