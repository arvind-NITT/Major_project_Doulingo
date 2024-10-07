import React from "react";
import flagImg from '../images/Flag-India.webp'
import SreakImg from '../images/65b8a029d7a148218f1ac98a198f8b42.svg'
import GemsImg from '../images/45c14e05be9c1af1d7d0b54c6eed7eee.svg'
import HeartImg from '../images/8fdba477c56a8eeb23f0f7e67fdec6d9.svg'
const SmallRightTopDetails = () => {
  return (
    
      <div class="d-flex justify-content-evenly container rounded-4 p-3 m-2 w-75">
        <div class="p-2 ">
            <img className="border border-white rounded" width={50} src={flagImg} alt="" />

        </div>
        <div class="p-2"> 
            <img style={{marginRight:'10px'}} src={SreakImg} alt="" />0
        </div>
        <div class="p-2 " style={{color: "rgb(73, 192, 248)"}}> <img style={{marginRight:'10px'}} src={GemsImg} alt="" /> 500</div>
        <div class="p-2 "  style={{color: 'pink'}}> <img style={{marginRight:'10px'}} src={HeartImg} alt="" />5</div>
      </div>
    
  );
};

export default SmallRightTopDetails;
