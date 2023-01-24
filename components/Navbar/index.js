import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar(){
    const [WhiteBg, setWhiteBg] = useState(true);
    const router = useRouter();

    const handleBg = () => {
        if (router.pathname === "/") {
        setWhiteBg(false);
        }  else {
        setWhiteBg(true);
        }
    };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          document.getElementById("navbarUtama").style.background = "black";
          document.getElementById("navbarUtama").style.opacity = "0.5";
          document.getElementById("navbarUtama").style.borderRadius="30px";
          document.getElementById("navbarUtama").style.marginTop="2%";
          document.getElementById("ask").style.color="#333";
        } 
        else {
          document.getElementById("navbarUtama").style.background = "transparent";
          document.getElementById("navbarUtama").style.opacity = "1";
          document.getElementById("ask").style.color="#fff";
        }
      }

    useEffect(() => {
        handleBg();
        if(!WhiteBg){
            window.onscroll = function() {scrollFunction()}
         }
        
    })
    return(
        <nav className={`${WhiteBg ? 'navbarPrev': ''} navbar navbar-expand-lg container fixed-top`} id="navbarUtama">
            <img src={`${WhiteBg ? '/images/logonewcolor.png' : '/images/logonew1.png'}`} />
            <button className="navbar-toggler" 
            type="button"
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
                <i className="fa fa-bars" style={{color: WhiteBg ? 'black' : 'white'}}></i>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
            {/* style={{zIndex: 99}} */}
                <ul className={`${WhiteBg ? 'ulprev' : ''} navbar-nav mx-auto`}>
                    <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/">Home</a>
                    </li>
                    {/* <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/#aboutme">About</a>
                    </li> */}
                    <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/#layanan">Services</a>
                    </li>
                    <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/#pricing">Pricing</a>
                    </li>
                    <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/previousworks">Previous Works</a>
                    </li>
                    <li className={`${WhiteBg ? 'liprev' : ''} nav-item`}>
                        {/* <!-- <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/concept">Concepts</a> --> */}
                        <a className={`${WhiteBg ? 'aprev' : ''} nav-link`} rel='noreferrer' href="/template">Template</a>
                    </li>
                </ul>   
                <a href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" 
                target="_blank" rel="noreferrer" >
                <button className={`btn ${WhiteBg ? 'btn-contactPrev' : 'btn-contact'}`}>Contact</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;