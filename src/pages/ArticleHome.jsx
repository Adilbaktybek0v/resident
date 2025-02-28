import React from 'react'
import Header from '../components/Header/Header'
import ArticleHero from '../components/Article/ArticleHero'
import ArtAbaut from '../components/ArticleAbaut/ArtAbaut'


function ArticleHome() {
  return (
    <section>
        <Header/>
        <ArticleHero/>
        <ArtAbaut/>
    </section>
  )
}

export default ArticleHome
