import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import DetailsBar from '../../components/DetailsBar/DetailsBar'
import Industries from '../../components/Industries/Industries'
import Service from '../../components/Service/Service'
import Product from '../../components/Product/Product'
import Review from '../../components/Review/Review'
import WhyUs from '../../components/WhyUs/WhyUs'
import Support from '../../components/Support/Support'
import Questions from '../../components/Questions/Questions'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Industries />
            <DetailsBar />
            <Service />
            <Product />
            <Review isDark={true} />
            <Questions />
            <Support />
        </div>
    )
}

export default Home
