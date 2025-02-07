import FeaturedProduct from '@/components/home/FeaturedProduct'
import HeroSection from '@/components/home/HeroSection'
import RecentlyAdded from '@/components/home/RecentlyAdded'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecentlyAdded />
      <FeaturedProduct />
    </>
  )
}

export default Home