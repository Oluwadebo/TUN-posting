import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const Signup = () => {
        navigate("/Signin");
    }
    return (
        <>
            <div className="container mt-5">
                <span>CLICK ON</span>
                <h3 className='mt-3'><b onClick={Signup} className='buton'>SIGN IN</b></h3>
                {/* <button
                    type="submit"
                    className="btn btn-secondary form-control py-3 mt-3 asd"
                    onClick={Signup}
                >
                    SIGN IN
                </button> */}
            </div>
        </>
    )
}

export default Signup