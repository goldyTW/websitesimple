import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Payment() {
    const router = useRouter();
    const [total, setTotal] = useState();
    const [nama, setNama] = useState();
    const [email, setEmail] = useState();
    let ttl;
    let nm = "";
    let em = "";
    

    useEffect(() => {
        // localStorage.removeItem("cart")
        ttl = localStorage.getItem("total");
        em = localStorage.getItem("email");
        nm = localStorage.getItem("nama");
        
        if(ttl != null ){
           setTotal(ttl)
           setNama(nm)
           setEmail(em)
        }

    }, [])

    function konfirmasi(){
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        localStorage.removeItem("email");
        localStorage.removeItem("nama");
        window.open(wa_link, '_blank')
        router.push('/template')
    }

    const wa_link = "https://api.whatsapp.com/send?phone=6289654710491&text=Saya%20"+nama+"%20dengan%20email%20"+email+"%20ingin%20mengkonfirmasi%20pembayaran%20landing%20page%20template%20pesanan%20saya%20sebesar%20"+Number(total).toLocaleString()+".%20Berikut%20saya%20lampirkan%20bukti%20pembayaran%20saya."

  return (
    <>
    <Head><title>WebsiteSimple | Konfirmasi Pembayaran</title></Head>
    <Navbar></Navbar>
    <section id="body">
        <a href="https://api.whatsapp.com/send?phone=6289654710491&text=Halo%20,%20saya%20mau%20bertanya%20tentang%20pembuatan%20website" 
        target="_blank" id="wafloat"  rel="noreferrer">
            <img src="/images/wa.png" width="75px" className=""/> 
            <div id="ask" className="text-center">Ask Us</div>
        </a>

        <section id="" className="pt-5">
            <div className="container my-4">
                <div className='py-4'>
                    <div className="col-12 text-center">
                        <img className='py-5 mt-5' src='/images/payment.png'></img>
                        <h2 className="servicesTitle">Menunggu Pembayaran</h2>
                        <p>Setelah kamu membayar, kami akan mengirimkan codingan template pesananmu ke <b style={{color:'#189AB4'}}>emailmu</b></p>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-xl-9 col-12 p-4 '>
                            <div className='cardCheckout text-center p-4'>
                                <p>Jumlah Pembayaran</p>
                                <h4>Rp {Number(total).toLocaleString()}</h4>
                                <br></br>
                                <p>Rekening Tujuan</p>
                                <h4>BCA 5271485060 a.n Goldy Tanjung Wijaya</h4>
                            </div>

                            <button className='btn checkoutBtn my-5 py-3' onClick={()=>konfirmasi()}>Konfirmasi Pembayaran</button>
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

export default Payment;

// jadi masuk data mulai dari pesanan, total, nama, email, kenapanya, isPaid=false itu di halaman isi-data
// di halaman payment, itu bakalan nge wa admin. trus ntar admin ngirimin template nya
// di next phase, di halaman isi data, ketika klik submit, langsung bayar pake midtrans. trus abis itu bisa lgsg download