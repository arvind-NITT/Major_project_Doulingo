import React from "react";
import Navbar from "./Navbar";
import Letters from "./Letters";
import RightSideBar from "./RightSideBar";
import Learn from "./Learn";
import Quests from "./Quests";
import { useDuolingoContext } from "./DuolingoContext";
import Leaderboards from "./Leaderboards";
const Home = () => {
  const { activeComponent } = useDuolingoContext();
  return (
    <div className="min-vw-100 w-100 h-100 d-flex justify-content-between">
      <div class="d-flex w-100 container_for_home">
        <div class="p-2 col-12 navbar-container "
        //  style={{ width: "256px" }}
         >
          {" "}
          <Navbar />
        </div>
        <div class="p-2 flex-grow-1 container">
          {activeComponent === 0 && <Learn />}
          {activeComponent === 1 && <Letters />}
          {activeComponent === 2 && <Leaderboards />}
          {activeComponent === 3 && <Quests />}
          
        </div>
        <div class="p-2 col-4  rightsidebar-container ">
          {" "}
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
