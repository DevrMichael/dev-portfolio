import AboutMeSection from '@/components/AboutMeSection/AboutMeSection'
import ClientCaseStudies from '@/components/ClientCaseStudies/ClientCaseStudies'
import Footer from '@/components/Footer/Footer'
import GuideDownload from '@/components/GuideDownload/GuideDownload'
import Hero from '@/components/Hero/Hero'
import InstagramReel from '@/components/InstagramReel/InstagramReel'
import NavBar from '@/components/NavBar/NavBar'
import QuoteBanner from '@/components/QuoteBanner/QuoteBanner'
import Testimonials from '@/components/Testimonials/Testimonials'
import WebsitePackageDetails from '@/components/WebsitePackageDetails/WebsitePackageDetails'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta
                    name="description"
                    content="Michael Siddiqi's web developer portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Hero />
            <QuoteBanner />
            <WebsitePackageDetails />
            <Testimonials />
            <ClientCaseStudies />
            <GuideDownload />
            <AboutMeSection />
            <InstagramReel />
            <Footer />
        </>
    )
}
