import React from "react";
import "./Styles.css";
import arrowimg from "../images/e013fd27fc6bd1d2fea85fe707b615cd.svg";
import startimg from "../images/ef9c771afdb674f0ff82fae25c6a7b0a.svg";
import startdarkimg from "../images/cbb0e971ac10030a120848c71c419892.svg";
import boxdark from "../images/0ae912c0b7a66354a850e6733ef653cb.svg";
import trophy from "../images/f4b1c683214cf55f5ddea4535b983745.svg";
import duolingoss from "../images/Screenshot2024-10-04.png";
import duolingogirl from "../images/a3e1fd17f6d11b10ecae6bf5bc1ca701.svg";
import forwaedarrow from "../images/5e4203031e39fc43d94371565fd0d369.svg";
const Learn = () => {
  return (
    <div className="container">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <div className="sections w-75 mt-4 p-3 rounded-4  Light_mehandi_bg">
          <div className="d-flex justify-content-start align-items-center">
            <div className="m-1"> 
              <img src={arrowimg} alt="" srcset="" />
            </div>
            <span>SECTION 1,</span>
            <span>UNIT 1</span>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <h3 style={{fontSize: "22px"}}>Pair letters and sounds</h3>
          </div>
        </div>

        <div className="Unit d-flex mt-5 justify-content-center flex-column">
          <div className="levels">
            <div className="levels_in_learn">
              <div className="outer_border">
              <div className="black_border"> 
                <div className="bg_to_img">
                  <img className="start_img" src={startimg} alt="" srcset="" />
                </div>
                </div>
              </div>
            </div>
          </div>
           <div className="levels" style={{marginLeft:'-100px'}}>
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
              {/* <div className="black_border">  */}
                  
                
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="levels" style={{marginLeft:'60px' }} >
            <div className="levels_in_learn" >
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
            <div className="container " style={{marginLeft:"100px"}} >
              <img src={duolingoss} style={{width:"100px"}} alt="" srcset="" />
            </div>
          </div>
           <div className="levels" style={{marginLeft:'-100px'}} >
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={boxdark} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
           <div className="levels">
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={trophy} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="d-flex w-100 align-items-center m-4 justify-content-evenly" >

        <div className="border col-3 border-secondary" style={{height:1}}></div>
        <h5 style={{color:"rgb(82, 101, 109)"}}>Borrowed Characters</h5>
        <div className="border col-3 border-secondary" style={{height:1}}></div>
      </div>
        <div className="Unit d-flex mt-5 justify-content-center flex-column">
          <div className="levels">
            <div className="levels_in_learn">
              <div className="outer_border">
              <div className="black_border"> 
                <div className="bg_to_img"  style={{backgroundColor:"rgb(206, 130, 255)"}}>
                  <img className="forwaedarrow_img"  src={forwaedarrow} alt="" srcset="" />
                </div>
                </div>
              </div>
            </div>
          </div>
           <div className="levels" style={{marginLeft:'100px'}}>
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
              {/* <div className="black_border">  */}
                  
                
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="levels" style={{marginLeft:'-100px' }} >
          <div className="container " style={{marginRight:"100px"}} >
              <img src={duolingogirl} style={{width:"100px"}} alt="" srcset="" />
            </div>
            <div className="levels_in_learn" >
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
            
          </div>
           <div className="levels" style={{marginLeft:'100px'}} >
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={boxdark} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
           <div className="levels">
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={trophy} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="d-flex w-100 align-items-center m-4 justify-content-evenly" >

        <div className="border col-3 border-secondary" style={{height:1}}></div>
        <h5 style={{color:"rgb(82, 101, 109)"}}>Borrowed Characters</h5>
        <div className="border col-3 border-secondary" style={{height:1}}></div>
      </div>
      <div className="Unit d-flex mt-5 justify-content-center flex-column">
          <div className="levels">
            <div className="levels_in_learn">
              <div className="outer_border">
              <div className="black_border"> 
                <div className="bg_to_img" style={{backgroundColor:"rgb(0, 205, 156)"}} >
                  <img className="start_img" src={forwaedarrow} alt="" srcset="" />
                </div>
                </div>
              </div>
            </div>
          </div>
           <div className="levels" style={{marginLeft:'-100px'}}>
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
              {/* <div className="black_border">  */}
                  
                
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="levels" style={{marginLeft:'60px' }} >
            <div className="levels_in_learn" >
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={startdarkimg} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
            <div className="container " style={{marginLeft:"100px"}} >
              <img src={duolingoss} style={{width:"100px"}} alt="" srcset="" />
            </div>
          </div>
           <div className="levels" style={{marginLeft:'-100px'}} >
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={boxdark} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
           <div className="levels">
            <div className="levels_in_learn">
              {/* <div className="outer_border"> */}
                <div className="bg_to_img_of_not_active_level">
                  <img className="start_img" src={trophy} alt="" srcset="" />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="d-flex w-100 align-items-center m-4 justify-content-evenly" >

        <div className="border col-3 border-secondary" style={{height:1}}></div>
        <h5 style={{color:"rgb(82, 101, 109)"}}>Borrowed Characters</h5>
        <div className="border col-3 border-secondary" style={{height:1}}></div>
      </div>
      </div>
    </div>
  );
};

export default Learn;
