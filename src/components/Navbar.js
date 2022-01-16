import React from "react";
import { Link } from "react-router-dom";

let context = {
  logo: "../img/bookbinger-logo.png",
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
class Navbar extends React.Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">
        <svg
              className="logo"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              
              
              viewBox="0 0 259.000000 195.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M580 1164 c0 -714 -4 -664 57 -664 100 0 373 -81 536 -159 l97 -47 0
651 0 651 -117 57 c-179 85 -335 133 -510 156 l-63 8 0 -653z"
                />
                <path
                  d="M1919 1805 c-178 -28 -337 -79 -511 -165 l-88 -44 0 -651 0 -652 98
48 c158 77 329 128 555 164 l37 6 0 654 c0 360 -1 655 -2 654 -2 -1 -42 -7
-89 -14z"
                />
                <path
                  d="M460 1019 l0 -651 24 6 c43 11 301 -13 421 -38 63 -14 160 -41 217
-61 180 -64 171 -63 241 -36 219 83 441 129 644 133 l123 3 0 648 0 647 -35 0
-35 0 0 -604 0 -603 -74 -6 c-175 -15 -367 -72 -565 -167 l-126 -61 -135 64
c-200 95 -381 149 -555 164 l-75 6 0 603 0 604 -35 0 -35 0 0 -651z"
                />
                <path
                  d="M355 1518 c-3 -7 -4 -308 -3 -668 l3 -655 35 2 c368 21 537 14 736
-34 159 -38 181 -38 291 -10 169 44 237 51 458 52 116 0 244 -2 285 -5 l75 -5
0 665 0 665 -32 3 -33 3 0 -599 0 -599 -152 -6 c-229 -9 -417 -47 -623 -128
l-100 -39 -101 39 c-209 81 -393 119 -621 128 l-153 6 0 599 0 598 -30 0 c-17
0 -33 -6 -35 -12z"
                />
              </g>
        </svg>
        BookBinger
        </a>
        <Link className="nav-item" to="/">
              <h6 className="nav-item-content">Home</h6>
        </Link>
        <Link className="nav-item" to="/create">
              <h6 className="nav-item-content">Create</h6>
        </Link>
        <Link className="nav-item" to="/about">
              <h6 className="nav-item-content">About</h6>
        </Link>
        
        <a href="#" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    );
  }
}

export default Navbar;
