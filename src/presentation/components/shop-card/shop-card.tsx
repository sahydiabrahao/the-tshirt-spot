import tshirtImage from '@/presentation/assets/tshirt.png'
import Styles from './shop-card-styles.scss'
import React from 'react'

const ShopCard: React.FC = () => {
  return (
    <div className={Styles.shopCard}>
    <div className={Styles.image}>
      <div className={Styles.shopAddCart}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0159 16C17.5473 16 18.0083 16.203 18.3989 16.609C18.7896 17.015 18.9849 17.4837 18.9849 18.015C18.9849 18.5463 18.7896 19.0073 18.3989 19.398C18.0083 19.7887 17.5473 19.984 17.0159 19.984C16.4846 19.984 16.0159 19.7887 15.6099 19.398C15.2039 19.0073 15.0009 18.5463 15.0009 18.015C15.0009 17.4837 15.2039 17.015 15.6099 16.609C16.0159 16.203 16.4846 16 17.0159 16ZM0.983934 0.0159912H4.26493L5.20293 1.98499H20.0159C20.2973 1.98499 20.5316 2.08666 20.7189 2.28999C20.9063 2.49332 20.9999 2.73566 20.9999 3.01699C20.9999 3.04832 20.9529 3.20466 20.8589 3.48599L17.2959 9.95499C16.9206 10.6423 16.3426 10.986 15.5619 10.986H8.10893L7.21793 12.627L7.17093 12.768C7.17093 12.924 7.24893 13.002 7.40493 13.002H18.9829V15.018H6.98293C6.4516 15.018 5.9906 14.815 5.59993 14.409C5.20927 14.003 5.01393 13.5343 5.01393 13.003C5.01393 12.6903 5.09193 12.3777 5.24793 12.065L6.60693 9.58099L2.99793 1.98699H0.981934V0.0179911L0.983934 0.0159912ZM6.98393 16C7.51527 16 7.98393 16.203 8.38993 16.609C8.79593 17.015 8.99893 17.4837 8.99893 18.015C8.99893 18.5463 8.79593 19.0073 8.38993 19.398C7.98393 19.7887 7.51527 19.984 6.98393 19.984C6.4526 19.984 5.9916 19.7887 5.60093 19.398C5.21027 19.0073 5.01493 18.5463 5.01493 18.015C5.01493 17.4837 5.21027 17.015 5.60093 16.609C5.9916 16.203 6.4526 16 6.98393 16Z" fill="#272727"/>
        </svg>
        <p>Add</p>
      </div>
      <img className={Styles.tshirtImage} src={tshirtImage} />
    </div>
    <div className={Styles.shopLabel}>
      <h6>T-shirt<span> (Black)</span> </h6>
      <h6>$ 49.99</h6>
    </div>
  </div>
  )
}

export default ShopCard
