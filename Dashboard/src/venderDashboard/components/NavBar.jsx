import React from 'react'
import { Link } from "react-router-dom";

//pasing props
const NavBar = ({OnLoginClick,OnRegister,showLogout,logoutHandler}) => {
    const firmName=localStorage.getItem('firmname');
    console.log(firmName);
    return (
        <div className="navSection">
            <a href="https://swiggy-client-dashboard.vercel.app/"  style={{textDecoration:"none",color:"white"}}className="company"> Vender-DashBoard</a>
            {/* <div className="company">Vender-DashBoard</div> */}
            <div className="firmname">
                {firmName? <h4>FirmName : {firmName} Restarent</h4>:"Home-Page"}
            </div>
                <div className="userAuth">
                    {!showLogout ?<>
                    <span onClick={OnLoginClick}>Login/</span>
                    <span onClick={OnRegister}>Register</span>
                    </> :<span onClick={logoutHandler}>Logout</span>
                    }

                </div>
        </div>
    )
}

export default NavBar
