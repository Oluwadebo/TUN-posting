import React, { useEffect, useState, } from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import NYSC from './assest/NYSC-LOGO.jpg'
import { useNavigate } from "react-router-dom";

const Posting = () => {
  const navigate = useNavigate();
  const [allUser, setallUser] = useState([]);
  const [currentuser, setcurrentuser] = useState("");
  const [currentuserdetails, setcurrentuserdetails] = useState({});
  const [customer, setcustomer] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (localStorage.nysc && localStorage.signinEmail && localStorage.users) {
      let AllUser = JSON.parse(localStorage.nysc);
      setallUser(JSON.parse(localStorage.nysc));
      setcurrentuser(JSON.parse(localStorage.signinEmail));
      setcurrentuserdetails(JSON.parse(localStorage.users));
      let email = JSON.parse(localStorage.users).email;
      let index = JSON.parse(localStorage.nysc).findIndex(
        (x) => x.email === email
      );
      setcustomer(AllUser[index].process[0]);
      setLoading(false)
    } else {
      navigate("/Signin");
    }
  }, []);
  const exit = () => {
    localStorage.removeItem("signinEmail");
    navigate("/Signin");
  }
  const print = () => {
    window.print()
  }
  const back = () => {
    navigate("/Process");
  }
  return (
    <>
      {
        loading &&
        <img src={NYSC} alt="" />
      }
      <div className="container">
        <fieldset className=''>
          <legend>POSTING INFORMATION</legend>
          <div className="row px-md-3">
            <div className="col-12 col-md-4 my-md-3 my-1">
              <div className="row">
                <div className="col-5">
                  <h4>SURNAME</h4>
                </div>
                <div className="col-7">
                  <h4>{customer.surname}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 my-md-3 my-1">
              <div className="row">
                <div className="col-5">
                  <h4>FIRSTNAME</h4>
                </div>
                <div className="col-7">
                  <h4>{customer.firstname}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 my-md-3 my-1">
              <div className="row">
                <div className="col-5 col-md-2">
                  <h4>SEX</h4>
                </div>
                <div className="col-7">
                  <h4>{customer.sex}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-md-3 my-1">
              <div className="row">
                <div className="col-5 col-md-4">
                  <h4>NATIONALITY</h4>
                </div>
                <div className="col-7">
                  <h4 className='sta'>{customer.nation}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-md-3 my-1">
              <div className="row">
                <div className="col-6 col-md-5">
                  <h4>DATE OF BIRTH</h4>
                </div>
                <div className="col-6">
                  <h4>{customer.dob}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 my-md-3 my-1">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h4>TERTIARY INSTITUTION</h4>
                </div>
                <div className="col-12 col-md-6">
                  <h4 className='sta'>{customer.school}</h4>
                </div>
              </div>
            </div>
            <div className="col-12 my-md-3 my-1">
              <div className="row">
                <div className="col-12 col-md-3">
                  <h4>YOU ARE POSTED TO</h4>
                </div>
                <div className="col-12 col-md-6">
                  <h4 className='sta'>{customer.posting}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 my-1">
              <button
                type="submit"
                className="btn btn-outline-secondary form-control py-3 mt-3"
                onClick={print}
              >
                PRINT
              </button>
            </div>
            <div className="col-12 col-md-4 my-1">
              <button
                type="submit"
                className="btn btn-outline-secondary form-control py-3 mt-3"
                onClick={exit}
              >
                LOG OUT
              </button>
            </div>
            <div className="col-12 col-md-4 my-1">
              <button
                type="submit"
                className="btn btn-outline-secondary form-control py-3 mt-3"
                onClick={back}
              >
                BACK
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default Posting