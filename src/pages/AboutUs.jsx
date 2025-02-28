import React from 'react'
import Header from '../components/Header/Header'
import AbHero from '../components/AbHero/AbHero'
import AbCompany from '../components/AbCompany/AbCompany'
import AbGrid from '../components/abgrid/AbGrid'

function AboutUs() {
  return (
    <section>
      <Header/>
      <AbHero/>
      <AbCompany/>
      <AbGrid/>
    </section>
  )
}

export default AboutUs
