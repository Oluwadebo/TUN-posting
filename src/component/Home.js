import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const Home = () => {
        navigate("/Signin");
    }
    return (
        <>
            <div className="container mt-5">
                <span>CLICK ON</span>
                <h3 className='mt-3' onClick={Home}>SIGN IN</h3>
            </div>
        </>
    )
}

export default Home