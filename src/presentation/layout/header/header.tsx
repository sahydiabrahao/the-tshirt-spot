import Styles from './header-styles.scss'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { showModal } from '@/presentation/redux/modal-slice'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const numOfCartItems = useAppSelector(state => state.shoppingCart.numOfCartItems)

  return (
    <>
      <section id='header' className={Styles.header}>
        <a href="/">
          <svg className={Styles.ttsLogo} width="142" height="42" viewBox="0 0 142 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2218 41.4213V27.6712H25.6227V41.4213H17.2218ZM17.2218 7.80192H1.92944V0.524938H40.9151V7.80192H25.6227V14.3288H17.2218V7.80192ZM62.3509 41.4213V27.6712H70.7515V41.4213H62.3509ZM62.3509 7.80192H47.0581V0.524938H86.0333V7.80192H70.7515V14.3288H62.3509V7.80192ZM96.9304 29.2575C98.4283 30.0933 99.9511 30.8472 101.5 31.5189C103.041 32.1906 104.644 32.7586 106.308 33.2228C107.965 33.6801 109.709 34.0302 111.539 34.273C113.37 34.5232 115.316 34.6481 117.378 34.6481C119.875 34.6481 121.995 34.4874 123.739 34.1658C125.489 33.8372 126.918 33.3907 128.026 32.8262C129.125 32.2617 129.929 31.5866 130.435 30.8007C130.934 30.0149 131.184 29.161 131.184 28.2395C131.184 28.0449 131.173 27.8554 131.152 27.6712H140C139.929 29.8275 139.382 31.7639 138.358 33.4799C137.251 35.3232 135.677 36.8772 133.637 38.1419C131.596 39.4065 129.136 40.3638 126.256 41.014C123.377 41.6714 120.171 42 116.64 42C114.31 42 112.031 41.8536 109.802 41.5608C107.581 41.2749 105.45 40.8679 103.41 40.3388C101.369 39.8031 99.4226 39.1633 97.5706 38.4205C95.7255 37.6846 94.0178 36.87 92.4476 35.9769L96.9304 29.2575ZM94.4339 13.5249C94.4339 12.4105 94.5895 11.303 94.9005 10.2025C95.2114 9.10924 95.7072 8.05902 96.3875 7.05181C97.0677 6.05155 97.9469 5.11928 99.0249 4.25468C100.096 3.39007 101.398 2.64343 102.932 2.01475C104.459 1.38607 106.224 0.893054 108.229 0.535693C110.233 0.178332 112.516 0 115.077 0C116.93 0 118.793 0.0999216 120.667 0.300113C122.541 0.500305 124.364 0.785846 126.137 1.15743C127.917 1.52173 129.628 1.96132 131.271 2.47551C132.914 2.99004 134.44 3.56147 135.851 4.19049L132.171 10.8884C131.007 10.3812 129.751 9.91313 128.405 9.48464C127.06 9.05581 125.656 8.68804 124.194 8.38064C122.726 8.0663 121.21 7.81615 119.646 7.63053C118.084 7.44491 116.488 7.35192 114.86 7.35192C112.552 7.35192 110.649 7.51985 109.151 7.8557C107.661 8.18426 106.474 8.60581 105.591 9.12C104.709 9.63453 104.093 10.2094 103.746 10.8457C103.406 11.4817 103.236 12.1138 103.236 12.7425C103.236 13.3209 103.361 13.8497 103.611 14.3288H94.4585C94.4419 14.0658 94.4339 13.7976 94.4339 13.5249Z" fill="white"/>
            <path d="M5.42496 26.0101V18.7592H2.12671V17.1897H10.535V18.7592H7.23678V26.0101H5.42496ZM12.4592 26.0101V17.1897H14.271V19.4919H19.8259V17.1897H21.6424V26.0101H19.8259V21.022H14.271V26.0101H12.4592ZM24.1798 26.0101V17.1897H31.7876V18.7592H25.9917V20.5205H31.1228V21.9928H25.9917V24.4476H31.907V26.0101H24.1798ZM40.4956 26.0101V18.7592H37.1973V17.1897H45.6033V18.7592H42.3074V26.0101H40.4956ZM46.9867 24.8359L47.9535 23.3866C48.2765 23.5669 48.605 23.7295 48.939 23.8743C49.2714 24.0192 49.6171 24.1417 49.976 24.2418C50.3334 24.3405 50.7095 24.416 51.1043 24.4684C51.4991 24.5223 51.9189 24.5493 52.3637 24.5493C52.902 24.5493 53.3593 24.5146 53.7354 24.4452C54.113 24.3744 54.4213 24.278 54.66 24.1563C54.8972 24.0346 55.0705 23.889 55.1797 23.7195C55.2874 23.55 55.3412 23.3658 55.3412 23.167C55.3412 22.8465 55.2062 22.593 54.9362 22.4066C54.6663 22.2201 54.2488 22.1269 53.6839 22.1269C53.4373 22.1269 53.1767 22.1431 52.902 22.1754C52.6274 22.2078 52.3504 22.2425 52.071 22.2794C51.7901 22.318 51.5139 22.3526 51.2424 22.3835C50.9693 22.4158 50.7126 22.432 50.4722 22.432C50.0727 22.432 49.6888 22.3811 49.3205 22.2794C48.9538 22.1777 48.6284 22.0252 48.3444 21.8218C48.0604 21.6199 47.8349 21.3664 47.6679 21.0613C47.4994 20.7562 47.4151 20.4003 47.4151 19.9935C47.4151 19.7531 47.4486 19.5142 47.5158 19.2769C47.5829 19.0412 47.6898 18.8146 47.8365 18.5974C47.9831 18.3816 48.172 18.1805 48.4029 17.9941C48.6355 17.8076 48.9171 17.6466 49.248 17.511C49.5773 17.3754 49.958 17.2691 50.3903 17.192C50.8226 17.115 51.315 17.0765 51.8674 17.0765C52.2669 17.0765 52.6687 17.098 53.0729 17.1412C53.4771 17.1843 53.8704 17.246 54.2527 17.3261C54.6366 17.4047 55.0057 17.4994 55.3599 17.6104C55.7142 17.7213 56.0435 17.8446 56.3478 17.9802L55.5542 19.4249C55.303 19.3154 55.0322 19.2145 54.742 19.1221C54.4517 19.0296 54.1489 18.9502 53.8337 18.884C53.5169 18.8162 53.19 18.7622 52.8529 18.7222C52.5158 18.6821 52.1717 18.6621 51.8206 18.6621C51.3228 18.6621 50.9123 18.6983 50.5893 18.7707C50.2678 18.8416 50.0119 18.9325 49.8215 19.0435C49.6311 19.1544 49.4985 19.2785 49.4235 19.4156C49.3502 19.5528 49.3135 19.6891 49.3135 19.8247C49.3135 20.0882 49.4329 20.304 49.6717 20.4719C49.912 20.6383 50.278 20.7216 50.7695 20.7216C50.9677 20.7216 51.1956 20.7077 51.4531 20.68C51.7106 20.6522 51.9813 20.6214 52.2653 20.5875C52.5494 20.5536 52.8388 20.5228 53.1338 20.495C53.4287 20.4658 53.7151 20.4511 53.9929 20.4511C54.5188 20.4511 54.9846 20.5097 55.3904 20.6268C55.7961 20.7439 56.1363 20.9103 56.411 21.1261C56.6856 21.3418 56.8932 21.603 57.0336 21.9096C57.1741 22.2163 57.2443 22.5599 57.2443 22.9405C57.2443 23.4475 57.1257 23.8997 56.8885 24.2973C56.6497 24.6949 56.3103 25.03 55.8702 25.3028C55.4302 25.5755 54.8996 25.782 54.2785 25.9222C53.6574 26.064 52.966 26.1349 52.2045 26.1349C51.702 26.1349 51.2104 26.1033 50.7297 26.0401C50.2491 25.9785 49.7895 25.8906 49.351 25.7766C48.9109 25.661 48.4911 25.5231 48.0916 25.3629C47.6937 25.2042 47.3254 25.0285 46.9867 24.8359ZM59.234 26.0101V17.1897H61.0459V19.4919H66.6007V17.1897H68.4172V26.0101H66.6007V21.022H61.0459V26.0101H59.234ZM70.7253 26.0101V17.1897H72.5488V26.0101H70.7253ZM74.8569 26.0101V17.1897H79.4005C80.0855 17.1897 80.6801 17.2606 81.1842 17.4024C81.6867 17.5426 82.1033 17.7468 82.4342 18.0149C82.7666 18.2815 83.0132 18.6066 83.1739 18.9903C83.3362 19.374 83.4173 19.8085 83.4173 20.2939C83.4173 20.6206 83.3776 20.9319 83.298 21.2278C83.2184 21.5236 83.0951 21.7956 82.9281 22.0437C82.7627 22.2918 82.5544 22.5129 82.3031 22.7071C82.0519 22.8997 81.7569 23.0599 81.4183 23.1878L83.3612 26.0101H81.1444L79.4637 23.5045H79.4122L76.6687 23.4999V26.0101H74.8569ZM76.6687 21.9535H79.4449C79.7883 21.9535 80.0887 21.9135 80.3462 21.8333C80.6036 21.7548 80.819 21.6438 80.9922 21.5005C81.1654 21.3587 81.295 21.1846 81.3808 20.9781C81.4666 20.7732 81.5096 20.5451 81.5096 20.2939C81.5096 19.8008 81.3379 19.4195 80.9946 19.1498C80.6512 18.8817 80.1347 18.7476 79.4449 18.7476H76.6687V21.9535ZM88.2512 26.0101V18.7592H84.9553V17.1897H93.3613V18.7592H90.063V26.0101H88.2512ZM98.6282 24.8359L99.5949 23.3866C99.9195 23.5669 100.248 23.7295 100.58 23.8743C100.914 24.0192 101.26 24.1417 101.617 24.2418C101.976 24.3405 102.353 24.416 102.748 24.4684C103.141 24.5223 103.561 24.5493 104.007 24.5493C104.544 24.5493 105.002 24.5146 105.379 24.4452C105.755 24.3744 106.063 24.278 106.301 24.1563C106.54 24.0346 106.713 23.889 106.821 23.7195C106.93 23.55 106.985 23.3658 106.985 23.167C106.985 22.8465 106.849 22.593 106.578 22.4066C106.308 22.2201 105.891 22.1269 105.328 22.1269C105.08 22.1269 104.818 22.1431 104.544 22.1754C104.27 22.2078 103.993 22.2425 103.712 22.2794C103.433 22.318 103.157 22.3526 102.884 22.3835C102.612 22.4158 102.356 22.432 102.116 22.432C101.715 22.432 101.331 22.3811 100.964 22.2794C100.596 22.1777 100.27 22.0252 99.9859 21.8218C99.7018 21.6199 99.4763 21.3664 99.3094 21.0613C99.1424 20.7562 99.0589 20.4003 99.0589 19.9935C99.0589 19.7531 99.0917 19.5142 99.1572 19.2769C99.2243 19.0412 99.3312 18.8146 99.4779 18.5974C99.6246 18.3816 99.8142 18.1805 100.047 17.9941C100.279 17.8076 100.56 17.6466 100.889 17.511C101.219 17.3754 101.599 17.2691 102.032 17.192C102.464 17.115 102.956 17.0765 103.509 17.0765C103.91 17.0765 104.313 17.098 104.717 17.1412C105.119 17.1843 105.513 17.246 105.897 17.3261C106.279 17.4047 106.647 17.4994 107.001 17.6104C107.356 17.7213 107.686 17.8446 107.992 17.9802L107.196 19.4249C106.944 19.3154 106.674 19.2145 106.383 19.1221C106.095 19.0296 105.792 18.9502 105.475 18.884C105.16 18.8162 104.834 18.7622 104.497 18.7222C104.16 18.6821 103.815 18.6621 103.464 18.6621C102.965 18.6621 102.555 18.6983 102.233 18.7707C101.91 18.8416 101.653 18.9325 101.463 19.0435C101.273 19.1544 101.141 19.2785 101.067 19.4156C100.992 19.5528 100.955 19.6891 100.955 19.8247C100.955 20.0882 101.075 20.304 101.315 20.4719C101.556 20.6383 101.922 20.7216 102.413 20.7216C102.612 20.7216 102.839 20.7077 103.095 20.68C103.352 20.6522 103.623 20.6214 103.907 20.5875C104.191 20.5536 104.48 20.5228 104.775 20.495C105.07 20.4658 105.357 20.4511 105.637 20.4511C106.163 20.4511 106.628 20.5097 107.034 20.6268C107.44 20.7439 107.779 20.9103 108.052 21.1261C108.327 21.3418 108.535 21.603 108.675 21.9096C108.817 22.2163 108.888 22.5599 108.888 22.9405C108.888 23.4475 108.769 23.8997 108.53 24.2973C108.293 24.6949 107.954 25.03 107.514 25.3028C107.074 25.5755 106.543 25.782 105.922 25.9222C105.301 26.064 104.609 26.1349 103.846 26.1349C103.343 26.1349 102.853 26.1033 102.374 26.0401C101.893 25.9785 101.433 25.8906 100.992 25.7766C100.552 25.661 100.133 25.5231 99.7354 25.3629C99.3375 25.2042 98.9684 25.0285 98.6282 24.8359ZM110.883 26.0101V17.1897H115.59C116.277 17.1897 116.871 17.2629 117.374 17.4093C117.876 17.5572 118.294 17.7691 118.626 18.0449C118.957 18.3208 119.203 18.6582 119.366 19.0573C119.528 19.4564 119.609 19.9064 119.609 20.4072C119.609 20.8772 119.529 21.3117 119.368 21.7108C119.209 22.1084 118.964 22.4536 118.633 22.7464C118.304 23.0376 117.888 23.2649 117.385 23.4282C116.883 23.5916 116.288 23.6732 115.602 23.6732L112.694 23.6686V26.0101H110.883ZM112.694 22.1223H115.637C115.98 22.1223 116.28 22.0814 116.536 21.9998C116.793 21.9196 117.009 21.8048 117.182 21.6554C117.355 21.5074 117.484 21.3271 117.57 21.1145C117.656 20.9018 117.699 20.6661 117.699 20.4072C117.699 19.8833 117.527 19.4757 117.182 19.1845C116.837 18.8932 116.322 18.7476 115.637 18.7476H112.694V22.1223ZM121.061 21.5745C121.061 20.9088 121.184 20.2993 121.43 19.7461C121.679 19.1929 122.027 18.7183 122.474 18.3223C122.922 17.9247 123.459 17.6166 124.085 17.3977C124.712 17.1805 125.407 17.0718 126.168 17.0718C126.927 17.0718 127.62 17.1805 128.249 17.3977C128.878 17.6166 129.416 17.9247 129.862 18.3223C130.31 18.7183 130.658 19.1929 130.906 19.7461C131.154 20.2993 131.278 20.9088 131.278 21.5745C131.278 22.2448 131.154 22.8588 130.906 23.4167C130.658 23.976 130.31 24.4568 129.862 24.859C129.416 25.2612 128.878 25.574 128.249 25.7974C127.62 26.0224 126.927 26.1349 126.168 26.1349C125.407 26.1349 124.712 26.0224 124.085 25.7974C123.459 25.574 122.922 25.2612 122.474 24.859C122.027 24.4568 121.679 23.976 121.43 23.4167C121.184 22.8588 121.061 22.2448 121.061 21.5745ZM122.87 21.5745C122.87 22.029 122.953 22.4389 123.12 22.8041C123.286 23.1693 123.516 23.4806 123.811 23.7379C124.106 23.9968 124.455 24.1956 124.857 24.3343C125.258 24.473 125.695 24.5423 126.168 24.5423C126.641 24.5423 127.078 24.473 127.479 24.3343C127.882 24.1956 128.23 23.9968 128.523 23.7379C128.817 23.4806 129.047 23.1693 129.214 22.8041C129.382 22.4389 129.467 22.029 129.467 21.5745C129.467 21.1199 129.382 20.7115 129.214 20.3494C129.047 19.9888 128.817 19.6837 128.523 19.4341C128.23 19.1829 127.882 18.9919 127.479 18.8609C127.078 18.7283 126.641 18.6621 126.168 18.6621C125.695 18.6621 125.258 18.7283 124.857 18.8609C124.455 18.9919 124.106 19.1829 123.811 19.4341C123.516 19.6837 123.286 19.9888 123.12 20.3494C122.953 20.7115 122.87 21.1199 122.87 21.5745ZM135.981 26.0101V18.7592H132.683V17.1897H141.089V18.7592H137.793V26.0101H135.981Z" fill="white"/>
          </svg>
        </a>
        <div className={Styles.menu}>
          <a href="/"><h5>T-shirt</h5></a>
          <a href="#"><h5>Design</h5></a>
          <a href="#"><h5>Tint</h5></a>
        </div>
        <a className={Styles.menuIcon} onClick={() => dispatch(showModal())}>
          <FaShoppingCart className={Styles.cartIcon}/>
          {numOfCartItems === 0 ? null : <span>{numOfCartItems}</span>}
        </a>
      </section>
    </>
  )
}

export default Header
