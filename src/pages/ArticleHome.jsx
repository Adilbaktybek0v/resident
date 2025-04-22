import React from 'react'

import ArticleHero from '../components/Article/ArticleHero'



function ArticleHome({detail, fetchDetail}) {
  return (
    <section>
        
        <ArticleHero detail={detail} fetchDetail={fetchDetail}/>
       
    </section>
  )
}

export default ArticleHome
