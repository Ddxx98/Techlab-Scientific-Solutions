import SEO from '../../components/SEO/SEO'
import Hero from '../../components/Hero/Hero'
import DetailsBar from '../../components/DetailsBar/DetailsBar'
import Industries from '../../components/Industries/Industries'
import Service from '../../components/Service/Service'
import Product from '../../components/Product/Product'
import Review from '../../components/Review/Review'
import WhyUs from '../../components/WhyUs/WhyUs'
import Support from '../../components/Support/Support'
import Questions from '../../components/Questions/Questions'

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Welcome to Techlab Scientific Solutions. We provide high-quality laboratory equipment and scientific solutions for research and industrial applications."
                keywords="Techlab Scientific Solutions, analytical instruments, laboratory supplies, scientific solutions, research equipment, Shimadzu service, lab instrumentation"
            />
            <Hero />
            <Industries />
            <DetailsBar />
            <Service />
            <Product />
            <Review isDark={true} />
            <Questions />
            <Support />
        </>
    )
}

export default Home
