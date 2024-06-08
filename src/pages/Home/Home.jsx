import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import Banner from '../../Components/Banner/Banner'
import Sliders from '../../Components/Sliders/Sliders'
import History from '../../Components/History/History'
import Stats from '../../Components/Stats/Stats'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Service from '../../Components/Service/Service'
import LuxuryProducts from '../../Components/LuxuryProducts/LuxuryProducts'
import StoneProducts from '../../Components/StoneProducts/StoneProducts'
import Claypots from '../../Components/Claypots/Claypots'
import Contact from '../Contact/Contact'
import './Home.css'   // for whatsapp in index.html
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  
  return (
    <div>
      
      <Navbar/>
      <Sliders/>
      <Stats/>
      <History/>
      {/* <Banner/>  */}
      <Testimonials/>
      <Service/>
      <FeaturedProducts/>
      <LuxuryProducts/>
      <StoneProducts/>
      <Claypots/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
