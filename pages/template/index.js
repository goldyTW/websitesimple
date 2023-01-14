import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TemplateCard from '../../components/TemplateCard';
import { product } from '../../data/product';

function Template(){
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    let harga = 0;
    let x;

    selected.map((item, i) => (
        product.map((item2) => (
            item == item2.id ?
            harga = harga + item2.price
            :
            ''
        ))
    ))

    const handlecheckout = () => {
        localStorage.setItem("harga",  JSON.stringify(harga));
        router.push('/checkout')
    }

    useEffect(() => {
        // localStorage.removeItem("cart")
        x = localStorage.getItem("cart");
        
        if(x != null ){
           setSelected(JSON.parse(x))
        }

    }, [])
   
    return(
        <>
        <Head><title>WebsiteSimple | Previous Works</title></Head>
        <Navbar></Navbar>
        <section id="body">
            <a href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" 
            target="_blank" id="wafloat">
                <img src="/images/wa.png" width="75px" className=""/> 
                <div id="ask" className="text-center">Ask Us</div>
            </a>

            <section id="previous_works" className="pt-5">
                <div className="container my-4">
                    <div className='py-4'>
                        <div className="col-12 text-center">
                            <h2 className="servicesTitle" style={{marginTop:'8%'}}>Website Template</h2>
                            <p>Download html, css, dan js dari website-website keren berikut ini</p>
                        </div>

                        <div className="row">
                            {
                                product.map((item, i) => (
                                    <TemplateCard
                                        key={i}
                                        img={item.img}
                                        name={item.name}
                                        id={item.id}
                                        link={item.link}
                                        setSelected={setSelected}
                                        selected={selected}
                                    ></TemplateCard>
                                ))
                            }
                        </div>

                        {
                            selected.length > 0 && 
                            <div className='cart px-lg-5 px-3 py-3'>
                                <div className="row justify-content-between align-self-center">
                                    <div className="col-7 align-self-center ">
                                        <h5 className='text-lg'>Rp { harga.toLocaleString() }</h5>
                                        {
                                            selected.map((item, i) => (
                                                product.map((item2) => (
                                                    item == item2.id &&
                                                        <a key={i}> {item2.name} {i != selected.length-1 && '+'}</a>
                                                ))
                                                    
                                            ))
                                        }
                                    </div>
                                    <div className="col-5 align-self-center text-right">
                                        <button className='btn btn-loginPage' onClick={handlecheckout}>
                                            <i className="fas fa-shopping-cart mr-1"></i> Checkout</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </section>
        <Footer></Footer>
        </>
    )
}

export default Template;