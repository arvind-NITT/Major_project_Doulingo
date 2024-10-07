import React from "react";
import doulogo from "../images/f92d5f2f7d56636846861c458c0d0b6c.svg";
import douImg from "../images/Screenshot2024-10-042.png";
import { Link } from "react-router-dom";
const Landing_page = () => {
  return (
    <div className="bg-white vw-100 vh-100 ff">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-evenly  ">
          <Link class="navbar-brand">
            <img src={doulogo} alt="" />
          </Link>
          <div className="d-flex w-25 text-secondary">
            <span
              style={{
                width: "250px",
                marginTop: "10px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Site Language{" "}
            </span>
            <select
              class="form-select border border-0 text-secondary"
              aria-label="Default select example"
            >
              <option selected>English</option>
              <option value="1">English</option>
              <option value="2">Hindi</option>
              <option value="3">French</option>
            </select>
          </div>
        </div>
      </nav>

      <div class="container h-75 d-flex text-center justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center">
          <div class="col ">
            <img src={douImg} alt="" srcset="" width={400} />
          </div>
          <div class="col">
            <div>
              <h2
                className="text-dark fw-bold ff"
                style={{ lineHeight: "normal" }}
              >
                The free, fun, and effective way to learn a language!
              </h2>
            </div>
            <div class="d-grid gap-2 col-7 mx-auto mt-5">
              <button
                class="btn mehandi_button border text-white fw-bold"
                type="button"
              >
                {" "}
                <Link className="text-decoration-none text-white" to={"./home"}>
                  GET STARTED
                </Link>
              </button>
              <button
                class="btn btn-white border rounded-4 fw-bold"
                type="button"
                style={{ color: "rgb(28, 176, 246)", height: "50px" }}
              >
                {" "}
                <Link
                  className="text-decoration-none "
                  style={{ color: "rgb(28, 176, 246)" }}
                  to={"./home"}
                >
                  I ALREADY HAVE AN ACCOUNT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Landing_page;
