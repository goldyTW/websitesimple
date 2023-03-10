import React from "react";

function Footer(){
    return(
        <footer className="footer">
        <div className="container">
            <div className="row justify-content-center text-center py-4">
                <div className="col-10 justify-content-center text-center">
                    Made by <span className="mr-2" style={{fontWeight: 'bold', color:'#01498d'}}>Websitesimple.id</span>
                    | <span className="ml-2">Connect</span>
                    <a rel="noreferrer" href="https://www.instagram.com/websitesimple.id/" target="_blank"><i className="fab fa-instagram icontact" alt='instagram'></i></a>
                    <a rel="noreferrer" href="https://dribbble.com/goldywijaya" target="_blank"><i className="fas fa-basketball-ball icontact" alt='dribbble'></i></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/company/website-simple-indonesia" target="_blank"><i className="fab fa-linkedin icontact" alt='linkedin'></i></a>
                    <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" target="_blank">
                        <i className="fas fa-phone icontact" alt='phone'></i></a>
                    <a rel="noreferrer" href="mailto:websitesimple@gmail.com" target="_blank"><i className="fas fa-envelope icontact" alt='email'></i></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;