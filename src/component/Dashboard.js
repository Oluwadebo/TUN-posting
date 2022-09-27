import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import P9 from "./assest/P9.jpg"
import img5 from "./assest/img5.jpg"

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="header">
          <nav>
            <i className="fa fa-home logo"></i>
            <ul>
              <li>
                <i className="fa fa-users-line active"></i>
              </li>
              <li>
                <i className="fa fa-video"></i>
              </li>
              <li>
                <i className="fa fa-message"></i>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
              </li>
              <li>
                <i className="fa fa-user"></i>
              </li>
              <li>
                <i className="fa fa-cog"></i>
              </li>
            </ul>
          </nav>
          <div className="asc">
            <div className="top-icons">
              <i className="fa fa-search"></i>
              <i className="fa fa-bars"></i>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={img5} className="host-img h-50" />
                <div className="contarols">
                  <i className="fa fa-message"></i>
                  <i class="fa fa-phone-slash ove"></i>
                  <i className="fa fa-phone call-icon"></i>
                  <i className="fa fa-microphone"></i>
                  <i className="fa fa-video"></i>
                </div>
              </div>
              <div className="col-2">
                <div className="joined">
                  <p>People joined</p>
                  <div>
                    <img src={P9} />
                    <img src={P9} />
                    <img src={P9} />
                    <img src={P9} />
                    <img src={P9} />
                  </div>
                </div>
                <div className="invite">
                  <p>Invite More People</p>
                  <div>
                    <img src={P9} alt="" />
                    <img src={P9} alt="" />
                    <img src={P9} alt="" />
                    <img src={P9} alt="" />
                    <img src={P9} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
