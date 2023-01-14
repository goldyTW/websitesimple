import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { product } from '../../data/product';
import { useRouter } from 'next/router';

function Checkout() {
    const [selected, setSelected] = useState([]);
    const randomNumber = Math.floor(Math.random() * 100);
    const router = useRouter();
    let x;
    let harga = 0;
    
    useEffect(() => {
        x = localStorage.getItem('cart');
        
        if(x != null ){
           setSelected(JSON.parse(x))
        }
    }, [])

    selected.map((item, i) => (
        product.map((item2) => (
            item == item2.id ?
            harga = harga + item2.price
            :
            ''
        ))
    ))

    function handleRemove(idnya) {
        const found = selected.indexOf(idnya);
        if (found > -1) {
          selected.splice(found, 1);
          localStorage.setItem("cart", JSON.stringify(selected));
        }
        setSelected([...selected])
      }

    function bayar(){
        localStorage.setItem('total', JSON.stringify(harga+randomNumber));
        router.push('/isi-data')
    }

  return (
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
                            <h2 className="servicesTitle" style={{marginTop:'8%'}}>Checkout</h2>
                            <p>Cek dulu yaa template yang kamu pilih sebelum dibayar</p>
                        </div>
                        <div className="col-12">
                            <div className='row justify-content-center'>
                                <div className='col-lg-8 col-12 p-3'>
                                    {
                                        selected.length != 0 ?
                                        selected.map((item) => (
                                            product.map((item2) => (
                                                item == item2.id &&
                                                <div className='cardCheckout py-3 px-4 my-3'>
                                                    <div className='row'>
                                                        <div className='col-lg-3 col-md-3 col-12 align-self-center'>
                                                            <img src={item2.img} width="100%"></img>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-7 align-self-center pt-3'>
                                                            <p className=''>{item2.name}</p>
                                                        </div>
                                                        <div className='col-lg-2 col-md-2 col-3 align-self-center pt-3'>
                                                            <p>{item2.price.toLocaleString()}</p>
                                                        </div>
                                                        <div className='col-lg-1 col-md-1 col-1 align-self-center'>
                                                            <i className="fas fa-times icontact" onClick={() => handleRemove(item2.id)} style={{cursor:'pointer'}}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            
                                        ))
                                        :
                                        'Tidak ada barang di cart'
                                    }
                                </div>
                                <div className='col-lg-4 col-12 p-3'>
                                    <div className='cardCheckout2 rightSide p-4 my-3'>
                                        <div className='row'>
                                            <div className='col-5 align-self-center'>
                                                <p className='align-self-center'>SubTotal</p>
                                            </div>
                                            <div className='col-7 align-self-center'>
                                            <p className='text-right'><b>{harga.toLocaleString()}</b></p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5 align-self-center'>
                                                <p className='align-self-center'>Kode Unik</p>
                                            </div>
                                            <div className='col-7 align-self-center'>
                                            <p className='text-right'><b>{randomNumber.toLocaleString()}</b></p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className='row'>
                                            <div className='col-5 align-self-center'>
                                                <p className='align-self-center'>Total</p>
                                            </div>
                                            <div className='col-7 align-self-center'>
                                            <p className='text-right'><b>{(harga+randomNumber).toLocaleString()}</b></p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <button className='btn checkoutBtn' onClick={()=> bayar()}>Bayar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </section>
    <Footer></Footer>
    </>
  )
}

export default Checkout