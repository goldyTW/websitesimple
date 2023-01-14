import React, { useEffect, useState } from 'react';

function HomeIndex(){
    const [active, setactive] = useState("best4lashes")
    var slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className.add(" active");
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, [])

    return(
        <section id="body">
        <a href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" 
         target="_blank" id="wafloat">
            <img src="/images/wa.png" width="75px" className="" /> 
            <div id="ask" className="text-center">Ask Us</div>
        </a>

        <section id="aboutme" className="pt-5">
            <div className="container">
                <div className="row justify-content-between mt-lg-5">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-12 text-center">
                        <img src="/images/landing2.png" width="80%" />
                        <img src="/images/sendcrypto.png" width="80%" />
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                        <h3>Kami Siap Membantu Bisnis Anda Go Digital</h3>
                        <a className="description">
                            Bisnis, terutama dalam bidang ekspor, sangat perlu untuk go digital agar mendapat kepercayaan dari client luar negri Anda.
                            Untuk membantu Anda, kami menyediakan layanan-layanan berikut:
                            <ol>
                            <li>Pembuatan Website Company Profile</li>
                            <li>Pembuatan Landing Page</li>
                            <li>Pembuatan Website Organization Profile</li>
                            <li>Pembuatan Website Blog</li>
                            <li>Pembuatan Website E-commerce</li>
                            <li>Pembuatan Website Custom</li>
                            {/* <!-- <li>Jasa SEO</li>
                            <li>Jasa Google, Facebook dan IG ads</li> --> */}
                            </ol>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="layanan" className="my-5">
            <div className="custom-shape-divider-top-1668752772">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className="container p-5">
                <div className="col-12 text-center my-4">
                    <p>Let Us Solve Your Problems</p>
                    <h2 className="servicesTitle">Layanan Kami</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/landingpage.png"/>
                            <div className="servicesText mt-4">Pembuatan Landing Page</div>
                            <a className="servicesDetail">Cocok untuk UMKM yang membutuhkan
                                website simple untuk memasarkan produknya ke pasaran</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/company2.png"/>
                            <div className="servicesText mt-4">Pembuatan Company Profile</div>
                            <a className="servicesDetail">Cocok untuk Anda pemilik bisnis di bidang <b>ekspor</b> untuk meningkatkan
                                kredibilitas bisnis Anda di mata calon klien</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/cart.png"/>
                            <div className="servicesText mt-4">Pembuatan Web E-Commerce</div>
                            <a className="servicesDetail">Cocok untuk Anda pemilik <b>toko online</b> agar customer anda lebih mudah dan
                                aman dalam bertransaksi</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/blog.png"/>
                            <div className="servicesText mt-4">Pembuatan Blog Website</div>
                            <a className="servicesDetail">Cocok untuk Anda yang ingin membuat blog pribadi untuk portofolio Anda</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/organization.png"/>
                            <div className="servicesText mt-4">Pembuatan Web Organization Profile</div>
                            <a className="servicesDetail">Cocok untuk <b>organisasi</b> non profit, atau organisasi seperti sekolah, gereja, dan komunitas</a>
                        </div>
                    </div>
                   {/* <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/seo.png"/>
                            <div className="servicesText mt-4">Jasa SEO</div>
                            <a className="servicesDetail">Cocok untuk Anda pemilik website yang ingin website nya <b>lebih banyak
                                    dikunjungi</b> oleh
                                customer</a>
                        </div>
                    </div> */}
                    {/* <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-3">
                        <div className="card p-5">
                            <img height="70px" width="70px" src="/images/igads.png"/>
                            <div className="servicesText mt-4">Jasa FB, IG, Google Ads</div>
                            <a className="servicesDetail">Cocok untuk Anda yang ingin bisnisnya <b>diiklankan</b> di facebook,
                                instagram, dan google</a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1668763475">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </section>

        <section id="works" className="py-5">
            <div className="container ">
                <div className="col-12 text-center">
                    <h2 className="Title">Previous Works</h2>
                </div>
                <div className="row justify-content-center">
                    {/* <div className="col-xl-4 col-lg-4 col-md-4 text-center">
                        <img className="previousWorksImg" src="/images/best4lashes_ss.png" />
                        <h4 className="mt-2">Best4lashes</h4>
                        <p>Eksportir Bulu Mata</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 text-center">
                        <img className="previousWorksImg" src="/images/tspss.png" />
                        <h4 className="mt-2">PT. Trimitra Selaras Prima</h4>
                        <p>Developer Perumahan</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 text-center">
                        <img className="previousWorksImg" src="/images/renovisi.jpg" />
                        <h4 className="mt-2">Renovisi</h4>  
                        <p>Blog Renovasi Rumah</p>
                    </div> */}
                    <div className={`panel ${active == "best4lashes" ? 'active' : ''}`} onClick={() => setactive('best4lashes')}
                        style={{backgroundImage: `url(/images/best4lashes_ss.png)`}}>
                    </div>
                    <div className={`panel ${active == "tsp" ? 'active' : ''}`} onClick={() => setactive('tsp')}
                        style={{backgroundImage: `url(/images/tspss.png)`}}>
                    </div>
                    <div className={`panel ${active == "renovisi" ? 'active' : ''}`} onClick={() => setactive('renovisi')}
                        style={{backgroundImage: `url(/images/renovisi.jpg)`}}>
                    </div>
                    <div className={`panel ${active == "petanetra" ? 'active' : ''}`} onClick={() => setactive('petanetra')}
                    style={{backgroundImage: `url(/images/petanetra3.png)`}}>
                    </div>
                    <div className="col-12 my-4 text-center">
                        <a className="seemore" href="/previousworks"><span>See More</span></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimoni" className="py-5">
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-12">
                        <h5>Testimoni</h5>
                        <h2 className="Title">Kisah Sukses Client Kami</h2>
                    </div>
                    <div className="col-md-8 col-12 slideshow-container">
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <div className="mySlides">
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-10 my-3 my-lg-0">
                                    <img src="/images/aldo.jpg" width="100%"/>
                                </div>
                                <div className="col-md-8 col-10 align-self-center">
                                    "Website yang dibuat oleh websitesimple.id telah membantu saya untuk meningkatkan kepercayaan
                                    buyer dari luar negri.
                                    Pengerjaannya juga cepat dan gak ribet"
                                    <br/>
                                    <div className="mt-3 clientName">Aldo Oktavianus</div>
                                    <div>CEO Best4lashes</div>
                                </div>
                            </div>
                        </div>
                        <div className="mySlides">
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-10 my-3 my-lg-0">
                                    <img src="/images/bom.jpg" width="100%"/>
                                </div>
                                <div className="col-md-8 col-10 align-self-center">
                                    "Company profile yang dibuat oleh websitesimple.id mempunyai UI/UX yang rapi, pengerjaannya cepat, dan harganya
                                    cukup
                                    terjangkau"
                                    <br/>
                                    <div className="mt-3 clientName">Christophorus Widi</div>
                                    <div>CEO PT. Trimitra Selaras Prima</div>
                                </div>
                            </div>
                        </div>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" className="py-5 mx-lg-5">
            <div className="container-fluid px-lg-5 px-4 ">
                <div className="col-12 text-center">
                    <h2 className="Title my-4">Pricing</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-12 my-3">
                        <div className="card2 p-4">
                            <div className="favorite"> <img src="/images/hemat.png" width="75px"/></div>
                            <h5 className="text-center">Landing Page</h5>
                            <div className="wrapperprice">
                                <h1 className="text-center">Rp500<span className="kilo">ribu</span></h1>
                            </div>
                            <hr/>
                            <div className="features">
                                <div className="my-3">Website 1 halaman menggunakan wordpress</div>
                                <div className="my-3">Harga include domain (kecuali .id, .co.id, .co) + SSL + hosting (max. 5000
                                    pengunjung/bln)</div>
                                    <div className="my-3">Responsive UI/UX</div>
                                <div className="my-3">Free UX writing</div>
                                <div className="my-3">Maintenance per tahun, free 1 tahun pertama</div>
                                <div className="my-3">Free SEO</div>
                                <div className="my-3">Revisi dikenakan charge tambahan</div>
                            </div>
                            <hr/>
                            <div className="col-12 my-4 text-center">
                                <a className="ngobrol"
                                    href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%2C%20saya%20mau%20bikin%20landing%20page"><span>Ngobrol
                                        Yuk</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 my-3">
                        <div className="card3 p-4">
                            <div className="favorite"> <img src="/images/hati.png" width="55px"/></div>
                            <h5 className="text-center">Company Profile</h5>
                            <div className="wrapperprice">
                                <h1 className="text-center">Rp750<span className="kilo">ribu</span></h1>
                                <p className="text-center">(Boleh diskusi lagi kok)</p>
                            </div>
                            <hr/>
                            <div className="features">
                                <div className="my-3">Website 5 halaman menggunakan wordpress</div>
                                <div className="my-3">Harga include domain + SSL + hosting (max. 5000 pengunjung/bln)</div>
                                <div className="my-3">Responsive UI/UX</div>
                                <div className="my-3">Free UX writing</div>
                                <div className="my-3">Maintenance per tahun, free 1 tahun pertama</div>
                                <div className="my-3">Free SEO</div>
                                <div className="my-3">Free 3x revisi s.d training</div>
                                <div className="my-3">Pembuatan content dikenakan charge tambahan</div>
                            </div>
                            <hr/>
                            <div className="col-12 my-4 text-center">
                                <a className="ngobrol"
                                    href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%2C%20saya%20mau%20bikin%20website%20company%20profile"><span>Ngobrol
                                        Yuk</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 my-3">
                        <div className="card2 p-4">
                            <div className="favorite"> <img src="/images/cart.png" width="75px"/></div>
                            <h5 className="text-center">E-Commerce</h5>
                            <div className="wrapperprice">
                                <h1 className="text-center">Rp2<span className="kilo">juta</span></h1>
                                <p className="text-center">(Boleh diskusi lagi kok)</p>
                            </div>
                            <hr/>
                            <div className="features">
                                <div className="my-3">Website 5 halaman (kecuali halaman detail barang) menggunakan wordpress woocommerce</div>
                                <div className="my-3">Harga include domain + SSL + hosting</div>
                                <div className="my-3">Responsive UI/UX</div>
                                <div className="my-3">Free UX writing</div>
                                <div className="my-3">Maintenance per tahun, free 1 tahun pertama</div>
                                <div className="my-3">Free SEO</div>
                                <div className="my-3">Free 3x revisi s.d training</div>
                                <div className="my-3">Free admin panel</div>
                            </div>
                            <hr/>
                            <div className="col-12 my-4 text-center">
                                <a className="ngobrol"
                                    href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%2C%20saya%20mau%20bikin%20website%20ecommerce"><span>Ngobrol
                                        Yuk</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 my-3">
                        <div className="card2 p-4">
                            <div className="favorite"> <img src="/images/tech.png" width="75px" /></div>
                            <h5 className="text-center">Custom Website</h5>
                            <div className="wrapperprice">
                                <h1 className="text-center" style={{fontSize: '35px'}}>Let's Discuss</h1>
                            </div>
                            <hr/>
                            <div className="features">
                                <div className="my-3">Jumlah halaman bebas (coding dari awal)</div>
                                <div className="my-3">Harga include domain + SSL + hosting</div>
                                <div className="my-3">Responsive UI/UX</div>
                                <div className="my-3">Free UX writing</div>
                                <div className="my-3">Maintenance per tahun, free 1 tahun pertama</div>
                                <div className="my-3">Free SEO</div>
                                <div className="my-3">Free 5x revisi s.d training</div>
                                <div className="my-3">Free admin panel</div>
                            </div>
                            <hr/>
                            <div className="col-12 my-4 text-center">
                                <a className="ngobrol"
                                    href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%2C%20saya%20mau%20bikin%20website%20custom"><span>Ngobrol
                                        Yuk</span></a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    </section>
    )
}

export default HomeIndex;