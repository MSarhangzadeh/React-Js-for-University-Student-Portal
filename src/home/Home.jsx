import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import UniversitySlider from './UniversitySlider'
import SocialMediaBanner from './SocialMediaBanner'
import Sponsor from './Sponsor'
import Footer from '../components/Footer'
import NavItems from '../components/NavItems'

// fuck off mahyar u dont need to edit this


const Home = () => {
  return (
    <div>
      <NavItems/>
      <Banner/>
      <UniversitySlider/>
      <SocialMediaBanner/>
      <HomeCategory/>
      <Sponsor/>
      <Footer/>
    </div>
  )
}

export default Home
