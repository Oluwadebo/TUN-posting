import React from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    const formik = useFormik({
        initialValues: {
            firstname: "",
            Lastname: "",
            email: "",
            password: "",
            gender: "",
            account: "0",
            score: "0",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstname: yup
                .string()
                .required("This field is required")
                .min(4, "must be greater than three"),
            Lastname: yup
                .string()
                .required("This field is required")
                .min(3, "must be greater than two"),
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            gender: yup.string().required("This field is required"),
            password: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "must be greater than 5 charaters"),
        }),
    });
    return (
        <>
            <div className="container">
                <form action="" onSubmit={formik.handleSubmit}>
                    <button
                        type="submit"
                        className="btn btn-info form-control py-3 mt-3 asd"
                    >
                        Sign-Up
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signin