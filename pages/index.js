import Head from 'next/head'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeIndex from '../components/HomeIndex';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
      <title> Websitesimple.id | Bikin Website Untuk Bisnismu!</title>
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
      <Hero></Hero>
      <HomeIndex></HomeIndex>
      <Footer></Footer>
    </>
  )
}
