import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Small_Right_Bottom_Navbar = () => {
  return (
    <div class="container  rounded-4 p-3 m-2 w-75 text-center ">
      <div class="row m-1">
        <div class="col-2"> <Link to='#' className="right_bottom_text">About</Link> </div>
        <div class="col-2"> <Link to='#' className="right_bottom_text">Blog</Link>  </div>
        <div class="col-2"><Link to='#' className="right_bottom_text">Store</Link></div>
        <div class="col-3"><Link to='#' className="right_bottom_text">efficacy</Link></div>
        <div class="col-2"><Link to='#' className="right_bottom_text">Careers</Link></div>
      </div>
      <div class="row ">
        <div class="col"><Link to='#' className="right_bottom_text">INVESTORS</Link></div>
        <div class="col"><Link to='#' className="right_bottom_text">Terms</Link></div>
        <div class="col"><Link to='#' className="right_bottom_text">Privacy</Link></div>
      </div>
    </div>
  );
};

export default Small_Right_Bottom_Navbar;









