import React from 'react';

function Hero(){
    return(
    <section id="landing">
        <img className="landingImage" src="/images/landing.png" width="100%" z-index="-1" alt='websitesimple.id'/>
        <div className="container kepala">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-12 banner">
                    <div><a className="bannerTitle animate__animated animate__fadeInUp">Buat Website untuk Bisnis Ekspormu Tanpa Ribet!</a> </div>
                    <div className="mb-xl-5 mb-lg-5 mb-md-4 mb-4"><a className="caption animate__animated animate__fadeInUp">Mulai dari <strong>Rp500.000,00</strong> saja Anda sudah bisa memiliki website untuk bisnis Anda</a></div>
                    <div><a className="btn px-4 py-2 tombol" href="#aboutme">Lebih Lanjut</a></div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10 col-12 banner align-self-center">
                    <img src="/images/gambarutama.png" className="projbanner align-self-center" alt='websitesimple'/>
                </div>
            </div>
        </div>
    </section>
)
}

export default Hero;