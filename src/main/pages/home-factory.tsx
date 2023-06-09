
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Hero from '@/presentation/pages/home/hero/hero'
import ShopTshirt from '@/presentation/pages/home/shop-tshirt/shop-tshirt'
import React from 'react'

export const MakeHome: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopTshirt />
      <Footer />
    </>
  )
}
