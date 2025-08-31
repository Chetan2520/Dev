import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import BestSellers from './Pages/BestSellers'
import ProductOfDay from './Pages/ProductOfDay'
import PremiumOilsStore from './Pages/PremiumOilsStore'
import WhyChooseUs from './Pages/WhyChooseUs'
import CustomerTestimonials from './Pages/CustomerTestimonials'
import VideoTestimonials from './Pages/VideoTestimonials'
import BlogSection from './Pages/BlogSection'
import NutritionExpertsSection from './Pages/NutritionExpertsSection'
import FAQSection from './Pages/FAQSection'
import Footer from './Components/Footer'

function App() {
  return (
<>
<Navbar/>
<Hero/>
<BestSellers/>
<ProductOfDay/>
<PremiumOilsStore/>
      <WhyChooseUs/>
      <CustomerTestimonials/>
      <VideoTestimonials/>
      <BlogSection/>
      <NutritionExpertsSection/>
      <FAQSection/>
      {/* <FooterBanner/> */}
      <Footer/>
</>
  )
}

export default App
