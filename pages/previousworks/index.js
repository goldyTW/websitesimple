import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation]);

const projects = [
    {
        id:1,
        name:'Renovisi',
        desc:'Website artikel mengenai inspirasi dan tips renovasi',
        src:'/images/renovisi.web.app.png',
        link:'https://renovisi.web.app/',
        color:'#cf8859'
    },
    {
        id:2,
        name:'PT. Trimitra Selaras Prima',
        desc:'Website Developer Perumahan Grand Citra Residence, Depok Jawa Barat',
        src:'/images/tsplong.png',
        link:'https://trimitra.site',
        color:'#666'
    },
    {
        id:3,
        name:'Best4lashes',
        desc:'Website Perusahaan Exportir Eyelash Extension',
        src:'/images/eyelash.png',
        link:'https://best4lashes.site',
        color:'#d1768d'
    },
    {
        id:4,
        name:'Rebuilding Project',
        desc:'Website organisasi sosial dibidang edukasi anak-anak panti asuhan',
        src:'/images/reb.png',
        link:'https://rebuildingproject.org/',
        color:'#fcb03f'
    },
    {
        id:5,
        name:'Cashack',
        desc:'Aplikasi penghasilan tambahan dari mengisi survey',
        src:'/images/cashack_prevwork.png',
        link:'https://play.google.com/store/apps/details?id=com.cashack',
        color:'#24a4fd'
    },
    {
        id:6,
        name:'Feed',
        desc:'Aplikasi deteksi kebusukan makanan yang terhubung dengan hardware IoT',
        src:'/images/feed_prevwork.jpg',
        link:'#',
        color:'#2CC970'
    },
    {
        id:7,
        name:'BaitAllahku',
        desc:'Website yang memfasilitasi anak muda hidup lebih sehat dalam iman',
        src:'/images/baitallahku2.png',
        link:'https://baitallah.goldywijaya.com',
        color:'#FFB2CC'
    },

]

const projectsInvolved = [
    {
        id:1,
        name:'PetaNetra',
        desc:'Company Profile startup aplikasi pemandu jalan penyandang tuna netra',
        src:'/images/petanetra2.png',
        link:'https://petanetra.netlify.app',
        color:'#589fa8'
    },
    {
        id:3,
        name:'Clarity Singapore',
        desc:'Website biro konsultasi psikologi di Singapura',
        src:'/images/clarity2.png',
        link:'#',
        color:'#e2bc76'
    },
    {
        id:7,
        name:'Translator Forum',
        desc:'Forum penerjemah buku bahasa Jerman - bahasa asing lainnya',
        src:'/images/translatorforum.de.png',
        link:'https://translatorforum.de',
        color:'#e42d3f'
    },
    {
        id:4,
        name:'Villa Maya',
        desc:'Website company profile Villa di Tabanan, Bali',
        src:'/images/villamaya.png',
        link:'https://villamaya.netlify.app',
        color:'#33828D'
    },
    {
        id:5,
        name:'Lumbung Mas',
        desc:'Website Induk Usaha Penyewaan Villa di Bali',
        src:'/images/lumbungmas.png',
        link:'https://lumbungmas.netlify.app',
        color:'#cb934a'
    },
    {
        id:6,
        name:'Etikord',
        desc:'Website startup ethical consumption di Eropa',
        src:'/images/etikord1.png',
        link:'https://etikord.com',
        color:'#51668c'
    },
    {
        id:8,
        name:'Jaktent 2021',
        desc:'Website event Jakarta Content Week 2021',
        src:'/images/jaktent.png',
        link:'https://jaktent2021.netlify.app',
        color:'#aaa'
    },
    {
        id:2,
        name:'Mountable',
        desc:'Website Startup pembuat alat tracking pendaki gunung berbasis Iot',
        src:'/images/mountable_prevwork.png',
        link:'#',
        color:'#325688'
    },
]

function PreviousWorks(){
    return(
        <>
        <Head><title>WebsiteSimple | Previous Works</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Membantu anda dalam pembuatan website untuk bisnis export" />
            <meta name="keywords" content="Jasa Pembuatan website, Konsultasi website, Pembuatan website custom, Web developer, Digital Agency, Website fancy, Design website, UI Designer, UX Designer, UI / UX Designer, Front end developer,
            backend developer, SEO, Search Engine Optimization, Digital marketing"></meta>

            <meta property="og:title" content="Websitesimple.id | Bikin Website Untuk Bisnismu!" />
            <meta property="og:description" content="Dengan teknologi Augmented Reality (AR) dan voice-over, PetaNetra bertujuan untuk menjadi mata bagi teman-teman tunanetra agar dapat bernavigasi secara mandiri di ruang publik indoor atau semi-outdoor." />
            <meta property="og:image" content="/images/logonew.png" />
            <meta property="og:url" content="https://websitesimple.id" />
        </Head>
        <Navbar></Navbar>
        <section id="body">
            <a href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" 
            target="_blank" id="wafloat"  rel="noreferrer">
                 <img src="/images/wa.png" width="75px" alt='whatsapp websitesimple'/> 
                <div id="ask" className="text-center">Ask Us</div>
            </a>

            <section id="previous_works" className="pt-5">
                <div className="container my-4">
                    <div className='py-4'>
                        <div className="col-12 text-center">
                            <h2 className="servicesTitle" style={{marginTop:'8%'}}>Previous Works</h2>
                            <p>Project yang kami plan, design, code, dan test hingga selesai</p>
                        </div>
                        <div className='swiperdesktop'>
                            <Swiper
                                slidesPerView={3}
                                navigation={true} 
                                >
                                {projects.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='swiperipad'>
                            <Swiper
                                slidesPerView={2.1}
                                navigation={true} 
                                >
                                {projects.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='swiperphone'>
                            <Swiper
                                slidesPerView={1.25}
                                navigation={true} 
                                >
                                {projects.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className='py-4'>
                        <div className="col-12 text-center">
                            <h2 className="servicesTitle">Involved Projects</h2>
                            <p>Project yang kami hanya terlibat dalam proses codingnya saja</p>
                        </div>
                        <div className='swiperdesktop'>
                            <Swiper
                                slidesPerView={3}
                                navigation={true} 
                                >
                                {projectsInvolved.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='swiperipad'>
                            <Swiper
                                slidesPerView={2.1}
                                navigation={true} 
                                >
                                {projectsInvolved.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='swiperphone'>
                            <Swiper
                                slidesPerView={1.25}
                                navigation={true} 
                                >
                                {projectsInvolved.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='col-12'>
                                        <a href={item.link} target="_blank"  rel="noreferrer">
                                        <div className='cardPrev align-self-center'>
                                            <div className="poster" style={{"--bgcolor":item.color}}>
                                                <img className='' src={item.src} alt={item.name}></img>
                                            </div>
                                            <div className="details">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </section>
        </section>
        <Footer></Footer>
        </>
    )
}

export default PreviousWorks;