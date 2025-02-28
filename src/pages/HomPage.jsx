import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import RealEstate from '../components/RealEstate/RealEstate'
import BlockRest from '../components/block_rest/BlockRest'
import BlockRestTwo from '../components/block_rest/BlockRestTwo'
import Reklama from '../components/reklama/Reklama'
import Footer from '../components/footer/Footer'



export default function HomPage() {
  return (
    <section>
      <Header/>
      <Hero/>
      <Popular/>
      <RealEstate />
      <BlockRest/>
      <BlockRestTwo/>
      <Reklama/>
      <Footer/>
    </section>
  )
}
