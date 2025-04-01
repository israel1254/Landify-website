import React from 'react'
import "./HomePage.css"
import HeroPage from '../../components/heroPage/HeroPage'
import LogoClouds from '../../components/logoClouds/LogoClouds'
import FeatureMultiple from '../../components/featureMultiple/FeatureMultiple'
import Testimonial from '../../components/testimonial/Testimonial'
import Stats from '../../components/stats/Stats'
import FeatureSingle5 from '../../components/featureSingl5/FeatureSingle5'
import FeatuereSingl6 from '../../components/featuereSingl6/FeatuereSingl6'
import Cta from '../../components/cta/Cta'
import Footer from '../../components/footer/Footer'
const HomePage = () => {
  return (
    <div>
      
      <HeroPage/>
      <LogoClouds />
      <FeatureMultiple />
      <Testimonial />
      <Stats />
      <FeatureSingle5/>
      <FeatuereSingl6/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default HomePage