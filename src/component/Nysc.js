import React from 'react'
import NYSC from './assest/NYSC-LOGO.jpg'

const Nysc = () => {
    return (
        <>
            <div>
                <div className="container bg-white">
                    <div className="row">
                        <div className="col col-md-4 ded" style={{ background: "#447502" }}></div>
                        <div className="col col-md-4">
                            <div className="py-md-4 py-2" style={{ background: "#447502" }}></div>
                            <img src={NYSC} alt="" className="img-fluid rig" />
                        </div>
                        <div className="col col-md-4 let" style={{ background: "#447502" }}></div>
                    </div>
                </div>
                <div className='container'>
                    <center>
                        <h1> <span className='bg-white px-4'>NYSC POSTING SYSTEM</span></h1>
                    </center>
                </div>

            </div>
        </>
    )
}

export default Nysc