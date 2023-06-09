
import Footer from '@/presentation/layout/footer/footer'
import Header from '@/presentation/layout/header/header'
import Information from '@/presentation/pages/payment/information/information'
import React from 'react'

export const MakePaymentInformation: React.FC = () => {
  return (
    <>
      <Header />
      <Information/>
      <Footer />
    </>
  )
}
