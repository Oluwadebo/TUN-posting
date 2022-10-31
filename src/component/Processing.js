import React,{ useEffect, useState, } from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Processing = () => {
    const navigate = useNavigate();
    const [allUser, setallUser] = useState([]);
    const [currentuser, setcurrentuser] = useState("");
    const [currentuserdetails, setcurrentuserdetails] = useState({});
    const [customer, setcustomer] = useState([]);
    useEffect(() => {
        if (localStorage.nysc && localStorage.signinEmail && localStorage.users) {
            let AllUser = JSON.parse(localStorage.nysc);
            setallUser(JSON.parse(localStorage.nysc));
            setcurrentuser(JSON.parse(localStorage.signinEmail));
            setcurrentuserdetails(JSON.parse(localStorage.users));
            let email = JSON.parse(localStorage.users).email;
            let index = JSON.parse(localStorage.nysc).findIndex(
                (x) => x.email === email
            );
            setcustomer(AllUser[index]);
        } else {
            navigate("/Signin");
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            surname: "",
            firstname: "",
            sex: "",
            state: "",
            nation: "",
            dob: "",
            school: "",
            maritas: "",
            course: "",
            grade: "",
            degree: "",
        },
        onSubmit: (values) => {
            let email = currentuserdetails.email;
            let index = allUser.findIndex((x) => x.email == email);
            setallUser({...allUser[index].process.push(values)});
            localStorage.setItem("nysc", JSON.stringify(allUser));
            navigate("/posting");
        },
        validationSchema: yup.object({
            surname: yup.string().required("This field is required").min(4, "must be greater than four"),
            firstname: yup.string().required("This field is required").min(3, "must be greater than three"),
            sex: yup.string().required("This field is required"),
            state: yup.string().required("This field is required").min(3, "must be greater than three"),
            nation: yup.string().required("This field is required").min(4, "must be greater than four"),
            dob: yup.string().required("This field is required").min(4, "must be greater than four"),
            school: yup.string().required("This field is required").min(5, "must be greater than four"),
            maritas: yup.string().required("This field is required"),
            course: yup.string().required("This field is required").min(3, "must be greater than three"),
            grade: yup.string().required("This field is required").min(4, "must be greater than three"),
            degree: yup.string().required("This field is required").min(4, "must be greater than three"),
        }),
    });
    const exit = () => {
        localStorage.removeItem("signinEmail");
        navigate("/Signin");
    }
    const print = () => {
        navigate("/posting");
    }
    return (
        <>
            <div className="container tp mb-5">
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6 my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 col-md-2 my-2">
                                    <label>SURNAME</label>
                                </div>
                                <div className="col-9 col-md-10">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.surname && formik.touched.surname
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="surname"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.surname && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.surname}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 col-md-2 my-2">
                                    <label>FIRSTNAME</label>
                                </div>
                                <div className="col-9 col-md-10">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.firstname && formik.touched.firstname
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="firstname"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.firstname && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.firstname}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 col-md-2 my-2">
                                    <label>SEX</label>
                                </div>
                                <div className="col-9 col-md-10">
                                    <select
                                        className={
                                            formik.errors.sex && formik.touched.sex
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        name="sex"
                                        onBlur={formik.handleBlur}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                    >
                                        <option></option>
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                    </select>
                                    {formik.touched.sex && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.sex}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-3 my-1">
                            <div className="row">
                                <div className="col-4 col-md-4 my-2">
                                    <label>STATE OF ORIGIN</label>
                                </div>
                                <div className="col-8 col-md-8">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.state && formik.touched.state
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="state"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.state && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.state}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-3 my-1">
                            <div className="row">
                                <div className="col-4 col-md-3 my-2">
                                    <label>NATIONALITY</label>
                                </div>
                                <div className="col-8 col-md-9">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.nation && formik.touched.nation
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="nation"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.nation && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.nation}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 my-2">
                                    <label>DATE OF BIRTH</label>
                                </div>
                                <div className="col-9">
                                    <input
                                        type="date"
                                        className={
                                            formik.errors.dob && formik.touched.dob
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="dob"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.dob && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.dob}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-md-3 my-1">
                            <div className="row">
                                <div className="col-10 col-md-3 my-2">
                                    <label>TERTIARY INSITTUTION</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.school && formik.touched.school
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="school"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.school && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.school}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 col-md-4 my-2">
                                    <label>MARITA STATUS</label>
                                </div>
                                <div className="col-9 col-md-8">
                                    <select
                                        className={
                                            formik.errors.maritas && formik.touched.maritas
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        name="maritas"
                                        onBlur={formik.handleBlur}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                    >
                                        <option></option>
                                        <option value="SINGLE">SINGLE</option>
                                        <option value="MARRIED">MARRIED</option>
                                        <option value="DIVORCED">DIVORCED</option>
                                    </select>
                                    {formik.touched.maritas && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.maritas}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-3 my-1">
                            <div className="row">
                                <div className="col-4 col-md-4 my-2">
                                    <label>COURSE OF STUDY</label>
                                </div>
                                <div className="col-8 col-md-8">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.course && formik.touched.course
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="course"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.course && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.course}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-md-3 my-1">
                            <div className="row">
                                <div className="col-10 col-md-3 my-2">
                                    <label>GRADE CLASSIFICATION</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.grade && formik.touched.grade
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="grade"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.grade && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.grade}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 my-md-3 my-1">
                            <div className="row">
                                <div className="col-3 col-md-2 my-2">
                                    <label>DEGREE</label>
                                </div>
                                <div className="col-9 col-md-10">
                                    <input
                                        type="text"
                                        className={
                                            formik.errors.degree && formik.touched.degree
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="degree"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.degree && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {formik.errors.degree}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 my-1">
                            <button
                                type="submit"
                                className="btn btn-outline-secondary form-control py-3 mt-3"
                            >
                                PROCCESS POSTING
                            </button>
                        </div>
                        <div className="col-12 col-md-2 my-1">
                            <button
                                type="submit"
                                className="btn btn-outline-secondary form-control py-3 mt-3"
                                onClick={print}
                            >
                                PRINT SLIP
                            </button>
                        </div>
                        <div className="col-12 col-md-2 my-1">
                            <button
                                type="submit"
                                className="btn btn-outline-secondary form-control py-3 mt-3"
                                onClick={exit}
                            >
                                EXIT
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Processing