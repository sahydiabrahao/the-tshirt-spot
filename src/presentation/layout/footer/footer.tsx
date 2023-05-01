import Styles from './footer-styles.scss'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <section id='footer' className={Styles.footer}>
        <div className={Styles.footerAbout}>
          <h5>About</h5>
          <svg width="142" height="42" viewBox="0 0 142 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2218 41.4213V27.6712H25.6227V41.4213H17.2218ZM17.2218 7.80192H1.92944V0.524938H40.9151V7.80192H25.6227V14.3288H17.2218V7.80192ZM62.3509 41.4213V27.6712H70.7515V41.4213H62.3509ZM62.3509 7.80192H47.0581V0.524938H86.0333V7.80192H70.7515V14.3288H62.3509V7.80192ZM96.9304 29.2575C98.4283 30.0933 99.9511 30.8472 101.5 31.5189C103.041 32.1906 104.644 32.7586 106.308 33.2228C107.965 33.6801 109.709 34.0302 111.539 34.273C113.37 34.5232 115.316 34.6481 117.378 34.6481C119.875 34.6481 121.995 34.4874 123.739 34.1658C125.489 33.8372 126.918 33.3907 128.026 32.8262C129.125 32.2617 129.929 31.5866 130.435 30.8007C130.934 30.0149 131.184 29.161 131.184 28.2395C131.184 28.0449 131.173 27.8554 131.152 27.6712H140C139.929 29.8275 139.382 31.7639 138.358 33.4799C137.251 35.3232 135.677 36.8772 133.637 38.1419C131.596 39.4065 129.136 40.3638 126.256 41.014C123.377 41.6714 120.171 42 116.64 42C114.31 42 112.031 41.8536 109.802 41.5608C107.581 41.2749 105.45 40.8679 103.41 40.3388C101.369 39.8031 99.4226 39.1633 97.5706 38.4205C95.7255 37.6846 94.0178 36.87 92.4476 35.9769L96.9304 29.2575ZM94.4339 13.5249C94.4339 12.4105 94.5895 11.303 94.9005 10.2025C95.2114 9.10924 95.7072 8.05902 96.3875 7.05181C97.0677 6.05155 97.9469 5.11928 99.0249 4.25468C100.096 3.39007 101.398 2.64343 102.932 2.01475C104.459 1.38607 106.224 0.893054 108.229 0.535693C110.233 0.178332 112.516 0 115.077 0C116.93 0 118.793 0.0999216 120.667 0.300113C122.541 0.500305 124.364 0.785846 126.137 1.15743C127.917 1.52173 129.628 1.96132 131.271 2.47551C132.914 2.99004 134.44 3.56147 135.851 4.19049L132.171 10.8884C131.007 10.3812 129.751 9.91313 128.405 9.48464C127.06 9.05581 125.656 8.68804 124.194 8.38064C122.726 8.0663 121.21 7.81615 119.646 7.63053C118.084 7.44491 116.488 7.35192 114.86 7.35192C112.552 7.35192 110.649 7.51985 109.151 7.8557C107.661 8.18426 106.474 8.60581 105.591 9.12C104.709 9.63453 104.093 10.2094 103.746 10.8457C103.406 11.4817 103.236 12.1138 103.236 12.7425C103.236 13.3209 103.361 13.8497 103.611 14.3288H94.4585C94.4419 14.0658 94.4339 13.7976 94.4339 13.5249Z" fill="white"/>
            <path d="M5.42496 26.0101V18.7592H2.12671V17.1897H10.535V18.7592H7.23678V26.0101H5.42496ZM12.4592 26.0101V17.1897H14.271V19.4919H19.8259V17.1897H21.6424V26.0101H19.8259V21.022H14.271V26.0101H12.4592ZM24.1798 26.0101V17.1897H31.7876V18.7592H25.9917V20.5205H31.1228V21.9928H25.9917V24.4476H31.907V26.0101H24.1798ZM40.4956 26.0101V18.7592H37.1973V17.1897H45.6033V18.7592H42.3074V26.0101H40.4956ZM46.9867 24.8359L47.9535 23.3866C48.2765 23.5669 48.605 23.7295 48.939 23.8743C49.2714 24.0192 49.6171 24.1417 49.976 24.2418C50.3334 24.3405 50.7095 24.416 51.1043 24.4684C51.4991 24.5223 51.9189 24.5493 52.3637 24.5493C52.902 24.5493 53.3593 24.5146 53.7354 24.4452C54.113 24.3744 54.4213 24.278 54.66 24.1563C54.8972 24.0346 55.0705 23.889 55.1797 23.7195C55.2874 23.55 55.3412 23.3658 55.3412 23.167C55.3412 22.8465 55.2062 22.593 54.9362 22.4066C54.6663 22.2201 54.2488 22.1269 53.6839 22.1269C53.4373 22.1269 53.1767 22.1431 52.902 22.1754C52.6274 22.2078 52.3504 22.2425 52.071 22.2794C51.7901 22.318 51.5139 22.3526 51.2424 22.3835C50.9693 22.4158 50.7126 22.432 50.4722 22.432C50.0727 22.432 49.6888 22.3811 49.3205 22.2794C48.9538 22.1777 48.6284 22.0252 48.3444 21.8218C48.0604 21.6199 47.8349 21.3664 47.6679 21.0613C47.4994 20.7562 47.4151 20.4003 47.4151 19.9935C47.4151 19.7531 47.4486 19.5142 47.5158 19.2769C47.5829 19.0412 47.6898 18.8146 47.8365 18.5974C47.9831 18.3816 48.172 18.1805 48.4029 17.9941C48.6355 17.8076 48.9171 17.6466 49.248 17.511C49.5773 17.3754 49.958 17.2691 50.3903 17.192C50.8226 17.115 51.315 17.0765 51.8674 17.0765C52.2669 17.0765 52.6687 17.098 53.0729 17.1412C53.4771 17.1843 53.8704 17.246 54.2527 17.3261C54.6366 17.4047 55.0057 17.4994 55.3599 17.6104C55.7142 17.7213 56.0435 17.8446 56.3478 17.9802L55.5542 19.4249C55.303 19.3154 55.0322 19.2145 54.742 19.1221C54.4517 19.0296 54.1489 18.9502 53.8337 18.884C53.5169 18.8162 53.19 18.7622 52.8529 18.7222C52.5158 18.6821 52.1717 18.6621 51.8206 18.6621C51.3228 18.6621 50.9123 18.6983 50.5893 18.7707C50.2678 18.8416 50.0119 18.9325 49.8215 19.0435C49.6311 19.1544 49.4985 19.2785 49.4235 19.4156C49.3502 19.5528 49.3135 19.6891 49.3135 19.8247C49.3135 20.0882 49.4329 20.304 49.6717 20.4719C49.912 20.6383 50.278 20.7216 50.7695 20.7216C50.9677 20.7216 51.1956 20.7077 51.4531 20.68C51.7106 20.6522 51.9813 20.6214 52.2653 20.5875C52.5494 20.5536 52.8388 20.5228 53.1338 20.495C53.4287 20.4658 53.7151 20.4511 53.9929 20.4511C54.5188 20.4511 54.9846 20.5097 55.3904 20.6268C55.7961 20.7439 56.1363 20.9103 56.411 21.1261C56.6856 21.3418 56.8932 21.603 57.0336 21.9096C57.1741 22.2163 57.2443 22.5599 57.2443 22.9405C57.2443 23.4475 57.1257 23.8997 56.8885 24.2973C56.6497 24.6949 56.3103 25.03 55.8702 25.3028C55.4302 25.5755 54.8996 25.782 54.2785 25.9222C53.6574 26.064 52.966 26.1349 52.2045 26.1349C51.702 26.1349 51.2104 26.1033 50.7297 26.0401C50.2491 25.9785 49.7895 25.8906 49.351 25.7766C48.9109 25.661 48.4911 25.5231 48.0916 25.3629C47.6937 25.2042 47.3254 25.0285 46.9867 24.8359ZM59.234 26.0101V17.1897H61.0459V19.4919H66.6007V17.1897H68.4172V26.0101H66.6007V21.022H61.0459V26.0101H59.234ZM70.7253 26.0101V17.1897H72.5488V26.0101H70.7253ZM74.8569 26.0101V17.1897H79.4005C80.0855 17.1897 80.6801 17.2606 81.1842 17.4024C81.6867 17.5426 82.1033 17.7468 82.4342 18.0149C82.7666 18.2815 83.0132 18.6066 83.1739 18.9903C83.3362 19.374 83.4173 19.8085 83.4173 20.2939C83.4173 20.6206 83.3776 20.9319 83.298 21.2278C83.2184 21.5236 83.0951 21.7956 82.9281 22.0437C82.7627 22.2918 82.5544 22.5129 82.3031 22.7071C82.0519 22.8997 81.7569 23.0599 81.4183 23.1878L83.3612 26.0101H81.1444L79.4637 23.5045H79.4122L76.6687 23.4999V26.0101H74.8569ZM76.6687 21.9535H79.4449C79.7883 21.9535 80.0887 21.9135 80.3462 21.8333C80.6036 21.7548 80.819 21.6438 80.9922 21.5005C81.1654 21.3587 81.295 21.1846 81.3808 20.9781C81.4666 20.7732 81.5096 20.5451 81.5096 20.2939C81.5096 19.8008 81.3379 19.4195 80.9946 19.1498C80.6512 18.8817 80.1347 18.7476 79.4449 18.7476H76.6687V21.9535ZM88.2512 26.0101V18.7592H84.9553V17.1897H93.3613V18.7592H90.063V26.0101H88.2512ZM98.6282 24.8359L99.5949 23.3866C99.9195 23.5669 100.248 23.7295 100.58 23.8743C100.914 24.0192 101.26 24.1417 101.617 24.2418C101.976 24.3405 102.353 24.416 102.748 24.4684C103.141 24.5223 103.561 24.5493 104.007 24.5493C104.544 24.5493 105.002 24.5146 105.379 24.4452C105.755 24.3744 106.063 24.278 106.301 24.1563C106.54 24.0346 106.713 23.889 106.821 23.7195C106.93 23.55 106.985 23.3658 106.985 23.167C106.985 22.8465 106.849 22.593 106.578 22.4066C106.308 22.2201 105.891 22.1269 105.328 22.1269C105.08 22.1269 104.818 22.1431 104.544 22.1754C104.27 22.2078 103.993 22.2425 103.712 22.2794C103.433 22.318 103.157 22.3526 102.884 22.3835C102.612 22.4158 102.356 22.432 102.116 22.432C101.715 22.432 101.331 22.3811 100.964 22.2794C100.596 22.1777 100.27 22.0252 99.9859 21.8218C99.7018 21.6199 99.4763 21.3664 99.3094 21.0613C99.1424 20.7562 99.0589 20.4003 99.0589 19.9935C99.0589 19.7531 99.0917 19.5142 99.1572 19.2769C99.2243 19.0412 99.3312 18.8146 99.4779 18.5974C99.6246 18.3816 99.8142 18.1805 100.047 17.9941C100.279 17.8076 100.56 17.6466 100.889 17.511C101.219 17.3754 101.599 17.2691 102.032 17.192C102.464 17.115 102.956 17.0765 103.509 17.0765C103.91 17.0765 104.313 17.098 104.717 17.1412C105.119 17.1843 105.513 17.246 105.897 17.3261C106.279 17.4047 106.647 17.4994 107.001 17.6104C107.356 17.7213 107.686 17.8446 107.992 17.9802L107.196 19.4249C106.944 19.3154 106.674 19.2145 106.383 19.1221C106.095 19.0296 105.792 18.9502 105.475 18.884C105.16 18.8162 104.834 18.7622 104.497 18.7222C104.16 18.6821 103.815 18.6621 103.464 18.6621C102.965 18.6621 102.555 18.6983 102.233 18.7707C101.91 18.8416 101.653 18.9325 101.463 19.0435C101.273 19.1544 101.141 19.2785 101.067 19.4156C100.992 19.5528 100.955 19.6891 100.955 19.8247C100.955 20.0882 101.075 20.304 101.315 20.4719C101.556 20.6383 101.922 20.7216 102.413 20.7216C102.612 20.7216 102.839 20.7077 103.095 20.68C103.352 20.6522 103.623 20.6214 103.907 20.5875C104.191 20.5536 104.48 20.5228 104.775 20.495C105.07 20.4658 105.357 20.4511 105.637 20.4511C106.163 20.4511 106.628 20.5097 107.034 20.6268C107.44 20.7439 107.779 20.9103 108.052 21.1261C108.327 21.3418 108.535 21.603 108.675 21.9096C108.817 22.2163 108.888 22.5599 108.888 22.9405C108.888 23.4475 108.769 23.8997 108.53 24.2973C108.293 24.6949 107.954 25.03 107.514 25.3028C107.074 25.5755 106.543 25.782 105.922 25.9222C105.301 26.064 104.609 26.1349 103.846 26.1349C103.343 26.1349 102.853 26.1033 102.374 26.0401C101.893 25.9785 101.433 25.8906 100.992 25.7766C100.552 25.661 100.133 25.5231 99.7354 25.3629C99.3375 25.2042 98.9684 25.0285 98.6282 24.8359ZM110.883 26.0101V17.1897H115.59C116.277 17.1897 116.871 17.2629 117.374 17.4093C117.876 17.5572 118.294 17.7691 118.626 18.0449C118.957 18.3208 119.203 18.6582 119.366 19.0573C119.528 19.4564 119.609 19.9064 119.609 20.4072C119.609 20.8772 119.529 21.3117 119.368 21.7108C119.209 22.1084 118.964 22.4536 118.633 22.7464C118.304 23.0376 117.888 23.2649 117.385 23.4282C116.883 23.5916 116.288 23.6732 115.602 23.6732L112.694 23.6686V26.0101H110.883ZM112.694 22.1223H115.637C115.98 22.1223 116.28 22.0814 116.536 21.9998C116.793 21.9196 117.009 21.8048 117.182 21.6554C117.355 21.5074 117.484 21.3271 117.57 21.1145C117.656 20.9018 117.699 20.6661 117.699 20.4072C117.699 19.8833 117.527 19.4757 117.182 19.1845C116.837 18.8932 116.322 18.7476 115.637 18.7476H112.694V22.1223ZM121.061 21.5745C121.061 20.9088 121.184 20.2993 121.43 19.7461C121.679 19.1929 122.027 18.7183 122.474 18.3223C122.922 17.9247 123.459 17.6166 124.085 17.3977C124.712 17.1805 125.407 17.0718 126.168 17.0718C126.927 17.0718 127.62 17.1805 128.249 17.3977C128.878 17.6166 129.416 17.9247 129.862 18.3223C130.31 18.7183 130.658 19.1929 130.906 19.7461C131.154 20.2993 131.278 20.9088 131.278 21.5745C131.278 22.2448 131.154 22.8588 130.906 23.4167C130.658 23.976 130.31 24.4568 129.862 24.859C129.416 25.2612 128.878 25.574 128.249 25.7974C127.62 26.0224 126.927 26.1349 126.168 26.1349C125.407 26.1349 124.712 26.0224 124.085 25.7974C123.459 25.574 122.922 25.2612 122.474 24.859C122.027 24.4568 121.679 23.976 121.43 23.4167C121.184 22.8588 121.061 22.2448 121.061 21.5745ZM122.87 21.5745C122.87 22.029 122.953 22.4389 123.12 22.8041C123.286 23.1693 123.516 23.4806 123.811 23.7379C124.106 23.9968 124.455 24.1956 124.857 24.3343C125.258 24.473 125.695 24.5423 126.168 24.5423C126.641 24.5423 127.078 24.473 127.479 24.3343C127.882 24.1956 128.23 23.9968 128.523 23.7379C128.817 23.4806 129.047 23.1693 129.214 22.8041C129.382 22.4389 129.467 22.029 129.467 21.5745C129.467 21.1199 129.382 20.7115 129.214 20.3494C129.047 19.9888 128.817 19.6837 128.523 19.4341C128.23 19.1829 127.882 18.9919 127.479 18.8609C127.078 18.7283 126.641 18.6621 126.168 18.6621C125.695 18.6621 125.258 18.7283 124.857 18.8609C124.455 18.9919 124.106 19.1829 123.811 19.4341C123.516 19.6837 123.286 19.9888 123.12 20.3494C122.953 20.7115 122.87 21.1199 122.87 21.5745ZM135.981 26.0101V18.7592H132.683V17.1897H141.089V18.7592H137.793V26.0101H135.981Z" fill="white"/>
          </svg>
          <h6>Revamp your style with us - one tee at a time.</h6>
        </div>

        <div className={Styles.footerContact}>
          <h5>Contact Us</h5>
          <h6>Phone: (555) 123-4567</h6>
          <h6>Email: info@thetshirtspot.com</h6>
          <h6>Address: 1234 Main St, Anytown USA</h6>
        </div>

        <div className={Styles.footerConnect}>
          <h5>Connect with us</h5>
          <div className={Styles.footerSocialMedia}>
            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4209 0.536362C6.51135 1.40072 -0.277197 9.06693 0.00870709 17.9565C0.0951431 20.543 0.653652 22.7837 1.79062 25.0642C3.4462 28.402 6.09247 31.0483 9.43688 32.7105C14.8558 35.41 21.2653 35.0376 26.3185 31.7331C28.2932 30.4432 30.1682 28.5283 31.4448 26.4937C31.9368 25.7225 32.6682 24.2198 33.0007 23.3156C33.3398 22.398 33.732 20.8156 33.8717 19.785C34.0246 18.7411 34.0445 16.3209 33.9116 15.3967C33.5193 12.6374 32.6416 10.2837 31.1855 8.08953C30.5738 7.15869 29.9555 6.40071 29.0911 5.5297C26.4382 2.85019 23.1403 1.18795 19.3704 0.629444C18.5592 0.509766 16.272 0.456573 15.4209 0.536362ZM21.0725 9.10682C21.2254 9.2265 21.2321 9.27304 21.252 10.2571C21.2786 11.4007 21.2188 11.7531 20.9794 11.7996C20.8996 11.8196 20.4342 11.8462 19.9422 11.8661C18.9049 11.906 18.5791 12.019 18.3265 12.4246C18.1802 12.6573 18.1736 12.7504 18.1536 14.0137L18.1337 15.3635H19.5366C20.3677 15.3635 20.9927 15.3901 21.0658 15.4299C21.3318 15.5762 21.3451 15.7092 21.1988 16.9459C21.0392 18.3422 21.0259 18.3821 20.893 18.515C20.8065 18.6081 20.5805 18.6214 19.4635 18.6214H18.1403V22.1919C18.1403 25.4166 18.127 25.769 18.0273 25.882C17.9276 25.9884 17.7946 26.0017 16.5446 26.0017C15.5672 26.0017 15.155 25.9818 15.0951 25.9219C15.0353 25.8621 15.0153 24.9512 15.0153 22.2318V18.6214H13.9581C12.9342 18.6214 12.8943 18.6148 12.7946 18.4751C12.7081 18.3488 12.6882 18.0962 12.6882 17.0057C12.6882 15.6959 12.6882 15.6893 12.8544 15.5297C13.0073 15.3701 13.0406 15.3635 14.0113 15.3635H15.002L15.0286 13.6813C15.0552 12.1587 15.0685 11.9592 15.2081 11.5403C15.5339 10.543 16.1257 9.8249 16.9701 9.41267C17.6483 9.07357 18.1669 8.99379 19.643 8.98714C20.8065 8.98049 20.9329 8.99379 21.0725 9.10682Z" fill="white"/>
            </svg>
            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4209 0.536362C6.51135 1.40072 -0.277197 9.06693 0.00870709 17.9565C0.0951431 20.543 0.653652 22.7837 1.79062 25.0642C3.4462 28.402 6.09247 31.0483 9.43688 32.7105C14.8558 35.41 21.2653 35.0376 26.3185 31.7331C28.2932 30.4432 30.1682 28.5283 31.4448 26.4937C31.9368 25.7225 32.6682 24.2198 33.0007 23.3156C33.3398 22.398 33.732 20.8156 33.8717 19.785C34.0246 18.7411 34.0445 16.3209 33.9116 15.3967C33.5193 12.6374 32.6416 10.2837 31.1855 8.08953C30.5738 7.15869 29.9555 6.40071 29.0911 5.5297C26.4382 2.85019 23.1403 1.18795 19.3704 0.629444C18.5592 0.509766 16.272 0.456573 15.4209 0.536362ZM22.3956 8.68129C22.9608 8.82756 23.7853 9.26639 24.1975 9.63873L24.5698 9.97118L25.1616 9.81161C25.8065 9.63873 26.5711 9.33953 27.0366 9.08022C27.2028 8.98714 27.3491 8.9273 27.369 8.9406C27.4222 9.00044 27.0499 9.73182 26.7507 10.1507C26.4781 10.523 26.1988 10.8089 25.6536 11.2345L25.4874 11.3608L25.9528 11.2744C26.5844 11.1547 27.143 11.0084 27.5751 10.8422C27.768 10.7624 27.9408 10.7159 27.9608 10.7292C28.0539 10.8289 26.4382 12.5576 25.9594 12.8701C25.7932 12.9831 25.7866 13.0097 25.7866 13.5815C25.7866 16.547 24.6297 19.672 22.6549 22.0456C19.7361 25.543 14.9954 27.1387 10.3278 26.1945C9.04459 25.9352 7.14965 25.2039 6.34513 24.6586L6.09912 24.4924L7.28263 24.4525C8.24007 24.4259 8.59247 24.386 9.13768 24.2464C10.3012 23.9539 11.2254 23.5483 12.1563 22.9166L12.655 22.5775L12.256 22.531C10.627 22.3182 9.27066 21.3142 8.61241 19.8182L8.44619 19.4459L9.19087 19.4525C9.59645 19.4525 10.0419 19.4259 10.1882 19.3994L10.4475 19.3462L9.9156 19.16C8.27997 18.5948 7.07651 17.0789 6.91029 15.3768C6.87039 14.9512 6.87704 14.8914 6.96348 14.9246C7.02332 14.9446 7.29593 15.0377 7.56853 15.1374C7.84114 15.2305 8.24672 15.3302 8.46614 15.3435L8.86507 15.3834L8.51933 15.1041C7.01667 13.894 6.47811 11.5536 7.30257 9.79166L7.50204 9.36613L8.18023 10.0776C9.77597 11.7464 11.6576 12.91 13.8185 13.5616C14.4236 13.7411 15.4342 13.9539 15.9462 14.0004C16.1855 14.0204 16.4714 14.0536 16.5845 14.0736L16.7906 14.1002L16.764 13.3555C16.7241 12.418 16.8438 11.8063 17.2028 11.0749C17.8877 9.69857 19.1177 8.81427 20.7002 8.55496C21.0326 8.50842 22.0033 8.57491 22.3956 8.68129Z" fill="white"/>
            </svg>
            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3843 0.555084C10.0651 1.10696 5.40412 3.99929 2.57163 8.50734C-1.44439 14.8904 -0.693049 23.3281 4.38017 28.8867C7.19272 31.9652 10.7034 33.807 14.9189 34.4054C15.7035 34.5184 18.3166 34.5118 19.141 34.4054C22.9908 33.8734 26.435 32.1646 29.0548 29.4917C29.9191 28.6141 30.0987 28.4079 30.6705 27.6499C32.3726 25.3826 33.483 22.6166 33.9152 19.5979C34.0283 18.8134 34.0283 16.1936 33.9152 15.409C33.6293 13.3944 33.104 11.6789 32.2729 9.99673C31.3819 8.21478 30.4777 6.94482 29.0614 5.51527C26.435 2.85565 23.1504 1.20004 19.3738 0.641521C18.5559 0.521839 16.1955 0.468647 15.3843 0.555084ZM21.0227 7.79589C22.9377 7.92223 24.0547 8.34112 25.0786 9.31188C26.1159 10.3026 26.5946 11.5194 26.721 13.4941C26.8074 14.7907 26.8074 20.1831 26.721 21.4996C26.5946 23.4943 26.1026 24.7244 25.0387 25.7284C24.048 26.6659 22.9044 27.0914 21.0227 27.2111C19.7461 27.2909 14.2806 27.2909 13.004 27.2111C11.0891 27.0848 9.97202 26.6659 8.94806 25.6951C7.91081 24.7044 7.43208 23.4876 7.30575 21.5129C7.21931 20.223 7.22596 14.6777 7.30575 13.4542C7.43873 11.5061 7.91746 10.2959 8.94806 9.31188C9.93212 8.38101 11.109 7.91558 12.8178 7.80254C13.9415 7.72276 19.8724 7.72276 21.0227 7.79589Z" fill="white"/>
              <path d="M14.5864 9.53136C12.5917 9.57125 12.2659 9.5912 11.8204 9.71088C10.4041 10.0965 9.5996 10.8944 9.22061 12.3107C9.10092 12.7561 9.08098 13.0886 9.04108 15.1631C9.02114 16.4464 9.02114 18.5608 9.04108 19.8507C9.08098 21.9185 9.10092 22.251 9.22061 22.6965C9.5996 24.1127 10.4041 24.9172 11.8204 25.2962C12.2659 25.4159 12.5983 25.4359 14.6728 25.4758C15.9561 25.4957 18.0705 25.4957 19.3604 25.4758C21.4416 25.4359 21.7607 25.4159 22.2195 25.2896C23.5958 24.9239 24.4336 24.0928 24.806 22.7098C24.9256 22.2443 24.9456 21.9385 24.9855 19.844C25.0054 18.5608 25.0054 16.4464 24.9855 15.1564C24.9456 13.0819 24.9256 12.7561 24.806 12.3107C24.427 10.8944 23.6158 10.0832 22.2062 9.71088C21.6876 9.5779 21.5546 9.57125 17.8112 9.50476C17.2792 9.49811 15.8298 9.51141 14.5864 9.53136ZM22.645 11.1936C22.8977 11.2867 23.1969 11.5726 23.3033 11.8319C23.6291 12.5833 23.0506 13.4476 22.2328 13.4476C21.6078 13.4476 21.0692 12.9157 21.0692 12.2907C21.0692 11.4862 21.8937 10.9077 22.645 11.1936ZM18.629 12.7628C19.4335 13.0421 19.879 13.328 20.5107 13.9463C21.1224 14.5514 21.5014 15.1498 21.7807 15.941C21.9535 16.4331 21.9668 16.5461 21.9668 17.5036C21.9668 18.461 21.9535 18.5741 21.7807 19.0661C21.5147 19.8307 21.1157 20.4557 20.5439 21.0342C19.9655 21.606 19.3405 22.005 18.5758 22.2709C18.0838 22.4438 17.9707 22.4571 17.0133 22.4571C16.0558 22.4571 15.9428 22.4438 15.4508 22.2709C14.6595 21.9917 14.0611 21.6127 13.456 21.001C12.8377 20.3693 12.5584 19.9238 12.2659 19.1193C12.0664 18.5541 12.0597 18.4943 12.0597 17.5036C12.0664 16.566 12.0797 16.4264 12.2459 15.941C12.5917 14.9104 13.3297 13.9397 14.2207 13.3479C15.1914 12.7029 15.8896 12.5101 17.1463 12.5367C17.9442 12.5567 18.1037 12.5833 18.629 12.7628Z" fill="white"/>
              <path d="M16.2289 14.3518C14.4802 14.8173 13.4163 16.5726 13.8552 18.2615C14.1743 19.4782 15.0387 20.3426 16.2621 20.6618C18.5494 21.2602 20.7702 19.0394 20.1718 16.7521C19.7063 14.9768 17.931 13.8931 16.2289 14.3518Z" fill="white"/>
            </svg>
          </div>
          <h6>Designed & Built by Sahydi Abrahão</h6>
          <h6>Hero image by <a href='https://unsplash.com/pt-br/@faithandyarn_'>Faith & Yarn</a></h6>
        </div>
      </section>
    </>
  )
}

export default Footer
