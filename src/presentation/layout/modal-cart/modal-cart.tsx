import Styles from './modal-cart-styles.scss'
import React from 'react'
import ModalCard from '@/presentation/components/modal-card/modal-card'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { FaPlus } from 'react-icons/fa'
import { showModal } from '@/presentation/redux/modal-slice'

const ModalCart: React.FC = () => {
  const dispatch = useAppDispatch()
  const modalIsVisible = useAppSelector(state => state.modal.modalIsVisible)
  const totalPrice = (49.99 * useAppSelector(state => state.cartCounter.numOfCartItems)).toFixed(2)
  return (
    <>
      <section id='modalCart' className={modalIsVisible ? Styles.modalCartShow : Styles.modalCart}>
          <div className={Styles.modalHeader}>
            <FaPlus className={Styles.modalClose} onClick={() => dispatch(showModal())}/>
          </div>
          <div className={Styles.modalBody}>
            <h5> Cart </h5>

            <ModalCard />

            <div className={Styles.modalTotal}>
              <h6> Total </h6>
              <div>
                <h6>
                  $ {totalPrice}
                </h6>
              </div>
            </div>
            <a href='/payment-account' onClick={() => dispatch(showModal())} className={Styles.checkoutButton}>Checkout</a>
          </div>
      </section>
    </>
  )
}

export default ModalCart
