import React from "react";
import flag1 from "../images/59a90a2cedd48b751a8fd22014768fd7.svg";
const Want_to_learn = () => {
  return (
    <div className="bg-white vw-100 vh-100 ff text-dark">
      <div>
        <h2>I want to learn...</h2>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col border ">
            <div>
              <img src={flag1} alt="" />
            </div>
            <div>
              <h5>Spanish</h5>
            </div>
          </div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
        <div class="row"></div>
      </div>
    </div>
  );
};

export default Want_to_learn;
