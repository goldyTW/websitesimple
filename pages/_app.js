import Head from 'next/head'
import '../styles/globals.css'
import '../styles/homey.css'
import '../styles/prevwork.css'
import '../styles/template.css'
import '../styles/checkout.css'
import "swiper/css/navigation"
import "swiper/swiper.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />  
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />

      <link rel="shortcut icon" type="image/x-icon" href="/images/logonewcolor.png" />
      <link rel = "apple-touch-icon" type = "image/png" href = "/images/logonewcolor.png" />
      <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" name="viewport" />
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
      {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/> */}
    
    </Head>

    <Component {...pageProps} />
    </>
  )
}
