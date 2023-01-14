import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

function IsiData() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);
    const [total, setTotal] = useState();
    const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let x;
    let ttl;
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    useEffect(() => {
        x = localStorage.getItem('cart');
        ttl = localStorage.getItem("total");
        
        if(x != null ){
           setSelected(JSON.parse(x))
           setTotal(ttl)
        }
    }, [])

    function lanjut(){
        setLoading(true);
        setErrorName(false)
        setErrorEmail(false)
        if(!name || !email || (email && !email.match(regExEmail)) ){
            if(!name){
              setErrorName(true)
              setLoading(false)
            }
            if(!email || (email && !email.match(regExEmail))){
                setErrorEmail(true)
                setLoading(false)
            }
        }
        else{
            setLoading(false)
            axios.post(`${url}/api/purchase`,{email, name, pesanan:selected, total, reason},{
                // pesanan:selected, total,
                headers: {
                  'Content-Type': 'application/json',
                },}).then(res => {
                  if(res.status==200){
                    router.push('/pembayaran')
                  }       
              })
              .catch(function (error) {
                setLoading(true);
                  if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setLoading(false);
                  } else if (error.request) {
                    console.log(error.request);
                    setLoading(false);
                  } else {
                    console.log('Error', error.message);
                    setLoading(false);
                  }})
        }
    }

  return (
    <>
    <Head><title>WebsiteSimple | Isi Data</title></Head>
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
                        <h2 className="servicesTitle" style={{marginTop:'8%'}}>Isi Data Kamu</h2>
                        <p>Demi kenyamanan bersama, tolong isi data kamu yaa</p>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-xl-6 col-12 p-4 '>
                            <div className='cardCheckout p-5'>
                                <label>Nama</label><br></br>
                                <input type="text" className='input form-control' placeholder='John Doe'
                                 value={name} onChange={(event) => setName(event.target.value)}></input>
                                {errorName ? 
                                <p className='error py-2'>Tolong isi nama mu!</p> : <p className='py-2'>{''}</p> 
                                 } 

                                <label>Email</label><br></br>
                                <input type="email" className='input form-control' placeholder='johndoe@gmail.com'
                                value={email} onChange={(event) => setEmail(event.target.value)}></input>
                                {
                                errorEmail ? <p className='error'>Tolong isi Email mu! Email format: john@example.com!</p> : <p className='py-2'>{''}</p>
                                }

                                <label>Kalo boleh tau, untuk apa kamu beli template ini?</label><br></br>
                                <textarea className='input form-control' placeholder='untuk...'
                                  value={reason} onChange={(event) => setReason(event.target.value)}
                                ></textarea>
                                <br></br>
                                {
                                    !loading ? 
                                    <button className='btn checkoutBtn my-3 py-2' onClick={()=> lanjut()}>Lanjut</button>
                                    :
                                    <div className='d-flex flex-row'>
                                    <div className="loading-spinner"></div> <div className='align-self-center ms-3'>Please Wait</div>
                                    </div>
                                }
                                
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

export default IsiData