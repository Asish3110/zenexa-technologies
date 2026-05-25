import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesSection from '../components/ServicesSection'
import TechnologySection from '../components/TechnologySection'
import ProcessSection from '../components/ProcessSection'
import StatsSection from '../components/StatsSection'
import TestimonialSection from '../components/TestimonialSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <TechnologySection />
     {/*<ProcessSection />*/}
    {/*<StatsSection />*/}
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default Home