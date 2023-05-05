import Styles from './footer-styles.scss'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <section id='footer' className={Styles.footer}>
        <div className={Styles.footerAbout}>
          <h5>About</h5>
          <a href="/">
            <svg className={Styles.ttsLogo} width="91" height="35" viewBox="0 0 91 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25.5469V9.4364H90.2074V25.5469H0Z" fill="#5702CF"/>
            <path d="M2.38818 23.1585V11.8247H87.8189V23.1585H2.38818Z" fill="#5702CF"/>
            <path d="M8.29681 15.2501V20.6827H6.75838V15.2501H4.77734L4.94689 14.2988H10.3011L10.1315 15.2501H8.29681ZM12.8889 20.6827H11.3505V14.2988H12.8889V16.9098H15.5338V14.2988H17.0723V20.6827H15.5338V17.8593H12.8889V20.6827ZM22.6977 20.6827H18.6571V14.2988H22.8226L22.6531 15.2501H20.1955V16.9438H22.339L22.1837 17.829H20.1955V19.7333H22.8673L22.6977 20.6827ZM28.9353 15.2501V20.6827H27.3969V15.2501H25.4158L25.5854 14.2988H30.9395L30.77 15.2501H28.9353ZM33.5363 19.8207C33.6731 19.8207 33.804 19.8053 33.929 19.7743C34.0539 19.7434 34.1639 19.6964 34.2591 19.6333C34.3555 19.5691 34.4328 19.4876 34.4911 19.3888C34.5494 19.2901 34.5786 19.1723 34.5786 19.0354C34.5786 18.8724 34.5375 18.7344 34.4554 18.6214C34.3745 18.5084 34.2663 18.409 34.1306 18.3233C33.9962 18.2377 33.8433 18.1591 33.672 18.0878C33.5006 18.0164 33.3257 17.9426 33.1472 17.8665C32.9676 17.7891 32.7933 17.7035 32.6243 17.6095C32.4542 17.5143 32.3013 17.4 32.1657 17.2668C32.0312 17.1335 31.9229 16.9747 31.8408 16.7903C31.7599 16.6058 31.7195 16.3857 31.7195 16.1299C31.7195 15.836 31.776 15.5707 31.889 15.3339C32.0021 15.0972 32.1633 14.8961 32.3727 14.7307C32.5821 14.5653 32.8343 14.4374 33.1294 14.347C33.4245 14.2578 33.7535 14.2131 34.1164 14.2131C34.2151 14.2131 34.3305 14.2167 34.4626 14.2238C34.5947 14.231 34.7362 14.2429 34.8874 14.2595C35.0385 14.2774 35.1937 14.3006 35.3532 14.3291C35.5126 14.3589 35.6697 14.3952 35.8243 14.438L35.6012 15.4624L35.5227 15.4981C35.3871 15.4363 35.2514 15.3845 35.1158 15.3429C34.9813 15.3012 34.8505 15.2661 34.7232 15.2376C34.597 15.2102 34.4786 15.1912 34.368 15.1805C34.2585 15.1686 34.1616 15.1626 34.0771 15.1626C33.7975 15.1626 33.5744 15.2221 33.4078 15.3411C33.2412 15.4601 33.158 15.6344 33.158 15.864C33.158 16.027 33.1984 16.1644 33.2793 16.2763C33.3602 16.3881 33.4685 16.4875 33.6041 16.5743C33.7386 16.6612 33.8915 16.7403 34.0628 16.8117C34.2353 16.8831 34.4108 16.958 34.5893 17.0366C34.7678 17.1139 34.9427 17.1996 35.114 17.2936C35.2853 17.3864 35.4382 17.4994 35.5727 17.6327C35.7083 17.7659 35.8166 17.9236 35.8975 18.1056C35.9796 18.2865 36.0206 18.5036 36.0206 18.757C36.0206 19.0533 35.9623 19.324 35.8457 19.5691C35.7291 19.8154 35.5626 20.0278 35.346 20.2062C35.1307 20.3847 34.8695 20.5233 34.5625 20.6221C34.2556 20.7208 33.9105 20.7702 33.5274 20.7702C33.3858 20.7702 33.2317 20.7619 33.0652 20.7452C32.8998 20.7297 32.7296 20.7059 32.5547 20.6738C32.3786 20.6417 32.2002 20.5995 32.0193 20.5471C31.8396 20.4948 31.6653 20.4311 31.4964 20.3561L31.723 19.3281L31.8105 19.2835C31.9759 19.3621 32.1341 19.4346 32.2852 19.5013C32.4363 19.5691 32.5827 19.6262 32.7243 19.6726C32.8647 19.719 33.0015 19.7553 33.1348 19.7815C33.2692 19.8076 33.4031 19.8207 33.5363 19.8207ZM38.7423 20.6827H37.2039V14.2988H38.7423V16.9098H41.3873V14.2988H42.9257V20.6827H41.3873V17.8593H38.7423V20.6827ZM46.049 14.2988V20.6827H44.5106V14.2988H46.049ZM49.9843 18.3216H49.174V20.6827H47.6356V14.2988H49.9272C50.3424 14.2988 50.7041 14.344 51.0123 14.4344C51.3205 14.5249 51.5769 14.6462 51.7815 14.7985C51.9862 14.9508 52.139 15.1275 52.2402 15.3286C52.3425 15.5285 52.3937 15.7391 52.3937 15.9604C52.3937 16.1603 52.3556 16.3494 52.2794 16.5279C52.2045 16.7064 52.1075 16.8706 51.9885 17.0205C51.8696 17.1704 51.7363 17.3066 51.5888 17.4292C51.4424 17.5529 51.2996 17.6612 51.1604 17.754L52.9469 20.6827H51.1604L49.9843 18.3216ZM49.174 15.2501V17.4363H50.2752C50.3573 17.3935 50.4352 17.3352 50.509 17.2614C50.5828 17.1889 50.6482 17.1056 50.7053 17.0116C50.7612 16.9176 50.807 16.8123 50.8427 16.6957C50.8772 16.5791 50.8945 16.453 50.8945 16.3173C50.8945 16.1662 50.8713 16.0252 50.8249 15.8943C50.7785 15.7635 50.7089 15.6498 50.6161 15.5535C50.5233 15.4583 50.4085 15.3839 50.2716 15.3304C50.1348 15.2768 49.9748 15.2501 49.7915 15.2501H49.174ZM56.793 15.2501V20.6827H55.2546V15.2501H53.2735L53.4431 14.2988H58.7972L58.6277 15.2501H56.793ZM63.2465 19.8207C63.3822 19.8207 63.5125 19.8053 63.6374 19.7743C63.7623 19.7434 63.873 19.6964 63.9694 19.6333C64.0645 19.5691 64.1413 19.4876 64.1996 19.3888C64.2579 19.2901 64.287 19.1723 64.287 19.0354C64.287 18.8724 64.2466 18.7344 64.1657 18.6214C64.0836 18.5084 63.9753 18.409 63.8409 18.3233C63.7052 18.2377 63.5517 18.1591 63.3804 18.0878C63.2091 18.0164 63.0342 17.9426 62.8557 17.8665C62.6772 17.7891 62.5029 17.7035 62.3328 17.6095C62.1626 17.5143 62.0103 17.4 61.8759 17.2668C61.7402 17.1335 61.632 16.9747 61.5511 16.7903C61.469 16.6058 61.4279 16.3857 61.4279 16.1299C61.4279 15.836 61.485 15.5707 61.5992 15.3339C61.7123 15.0972 61.8735 14.8961 62.0829 14.7307C62.2911 14.5653 62.5428 14.4374 62.8378 14.347C63.1329 14.2578 63.4619 14.2131 63.8248 14.2131C63.9235 14.2131 64.039 14.2167 64.171 14.2238C64.3031 14.231 64.4447 14.2429 64.5958 14.2595C64.7469 14.2774 64.9028 14.3006 65.0634 14.3291C65.2228 14.3589 65.3793 14.3952 65.5328 14.438L65.3115 15.4624L65.2329 15.4981C65.0961 15.4363 64.9605 15.3845 64.826 15.3429C64.6904 15.3012 64.5595 15.2661 64.4334 15.2376C64.3073 15.2102 64.1889 15.1912 64.0782 15.1805C63.9676 15.1686 63.87 15.1626 63.7855 15.1626C63.5071 15.1626 63.2846 15.2221 63.118 15.3411C62.9503 15.4601 62.8664 15.6344 62.8664 15.864C62.8664 16.027 62.9068 16.1644 62.9878 16.2763C63.0699 16.3881 63.1781 16.4875 63.3126 16.5743C63.4482 16.6612 63.6017 16.7403 63.773 16.8117C63.9444 16.8831 64.1193 16.958 64.2977 17.0366C64.4762 17.1139 64.6511 17.1996 64.8224 17.2936C64.9938 17.3864 65.1473 17.4994 65.2829 17.6327C65.4174 17.7659 65.5256 17.9236 65.6077 18.1056C65.6886 18.2865 65.7291 18.5036 65.7291 18.757C65.7291 19.0533 65.6708 19.324 65.5542 19.5691C65.4388 19.8154 65.2728 20.0278 65.0563 20.2062C64.8397 20.3847 64.5779 20.5233 64.271 20.6221C63.9652 20.7208 63.6207 20.7702 63.2376 20.7702C63.0948 20.7702 62.9408 20.7619 62.7754 20.7452C62.61 20.7297 62.4393 20.7059 62.2632 20.6738C62.0871 20.6417 61.9092 20.5995 61.7295 20.5471C61.5499 20.4948 61.3756 20.4311 61.2066 20.3561L61.4333 19.3281L61.5207 19.2835C61.6861 19.3621 61.8443 19.4346 61.9955 19.5013C62.1466 19.5691 62.2923 19.6262 62.4327 19.6726C62.5743 19.719 62.7117 19.7553 62.845 19.7815C62.9782 19.8076 63.1121 19.8207 63.2465 19.8207ZM68.4526 15.2501V20.6827H66.9141V14.2988H69.2057C69.6269 14.2988 70.0005 14.3464 70.3265 14.4416C70.6513 14.5356 70.925 14.6712 71.1475 14.8485C71.37 15.0258 71.5378 15.2393 71.6508 15.4892C71.7638 15.7391 71.8203 16.0205 71.8203 16.3334C71.8203 16.6737 71.7585 16.9818 71.6347 17.2579C71.511 17.5339 71.3432 17.7683 71.1314 17.961C70.9196 18.155 70.6722 18.3043 70.389 18.409C70.1058 18.5125 69.8042 18.5643 69.4841 18.5643C69.4377 18.5643 69.3931 18.5631 69.3503 18.5607C69.3063 18.5583 69.2551 18.5524 69.1968 18.5429L69.2718 17.6719C69.2944 17.6779 69.3235 17.6814 69.3592 17.6826C69.3937 17.6838 69.4252 17.6844 69.4538 17.6844C69.599 17.6844 69.7263 17.6535 69.8357 17.5916C69.944 17.5285 70.0338 17.4435 70.1052 17.3364C70.1766 17.2293 70.2307 17.1044 70.2676 16.9616C70.3033 16.8188 70.3212 16.6665 70.3212 16.5047C70.3212 16.2775 70.2932 16.0847 70.2373 15.9265C70.1802 15.7682 70.0987 15.6391 69.9928 15.5392C69.8869 15.4392 69.759 15.3661 69.6091 15.3197C69.4592 15.2733 69.2914 15.2501 69.1058 15.2501H68.4526ZM76.0983 19.8207C76.3684 19.8207 76.6093 19.7583 76.8211 19.6333C77.0341 19.5084 77.2132 19.3406 77.3583 19.13C77.5035 18.9194 77.6135 18.6749 77.6885 18.3965C77.7646 18.1193 77.8027 17.8296 77.8027 17.5274C77.8027 17.2025 77.7605 16.8974 77.676 16.6118C77.5915 16.3251 77.4719 16.074 77.3173 15.8586C77.1614 15.6445 76.974 15.4749 76.7551 15.35C76.535 15.2251 76.2917 15.1626 76.0251 15.1626C75.755 15.1626 75.5147 15.2257 75.3041 15.3518C75.0935 15.4779 74.9162 15.6463 74.7723 15.8569C74.6283 16.0675 74.5182 16.3114 74.4421 16.5886C74.3671 16.8658 74.3297 17.1555 74.3297 17.4578C74.3297 17.7838 74.3719 18.0895 74.4564 18.3751C74.5408 18.6618 74.6598 18.9117 74.8133 19.1247C74.9668 19.3388 75.1524 19.5084 75.3701 19.6333C75.5891 19.7583 75.8318 19.8207 76.0983 19.8207ZM75.9502 20.7702C75.4945 20.7702 75.0709 20.6994 74.6795 20.5578C74.2892 20.4174 73.9501 20.2128 73.6622 19.9439C73.3754 19.675 73.15 19.346 72.9858 18.9569C72.8216 18.5679 72.7395 18.1252 72.7395 17.6291C72.7395 17.1198 72.8257 16.6558 72.9983 16.237C73.1708 15.817 73.4105 15.4571 73.7175 15.1573C74.0245 14.8586 74.3874 14.6266 74.8062 14.4612C75.2262 14.2958 75.6849 14.2131 76.1822 14.2131C76.6343 14.2131 77.0561 14.2827 77.4476 14.4219C77.8378 14.5612 78.1769 14.7652 78.4648 15.0341C78.7528 15.303 78.9783 15.632 79.1413 16.0211C79.3054 16.4101 79.3875 16.8527 79.3875 17.3489C79.3875 17.6892 79.3489 18.0098 79.2715 18.3109C79.193 18.6107 79.0818 18.8879 78.9378 19.1425C78.7938 19.3971 78.6189 19.6244 78.4131 19.8243C78.2061 20.0242 77.9758 20.1949 77.7224 20.3365C77.4678 20.4769 77.1917 20.5846 76.8943 20.6595C76.5957 20.7333 76.2809 20.7702 75.9502 20.7702ZM83.4264 15.2501V20.6827H81.8897V15.2501H79.9069L80.0764 14.2988H85.4306L85.2611 15.2501H83.4264Z" fill="white"/>
            <path d="M19.0182 5.53234V7.84425H10.8105V5.53234H0.241211L1.1457 0.457035H29.7111L28.8066 5.53234H19.0182ZM19.0182 34.5167H10.8105V27.1391H19.0182V34.5167ZM52.1732 5.53234V7.84425H43.9655V5.53234H33.3866L34.2913 0.457035H62.8663L61.9616 5.53234H52.1732ZM52.1732 34.5167H43.9655V27.1391H52.1732V34.5167ZM76.7204 29.9176C77.4503 29.9176 78.1487 29.8351 78.8154 29.6702C79.482 29.5052 80.0692 29.2545 80.5767 28.9178C81.091 28.575 81.5003 28.1402 81.805 27.6133C81.8936 27.4635 81.9695 27.3053 82.0328 27.1391H89.5787C89.4379 27.6347 89.2591 28.1134 89.0417 28.575C88.4197 29.8891 87.5308 31.0221 86.3756 31.9743C85.2204 32.9264 83.8269 33.666 82.1955 34.1929C80.5578 34.7198 78.7168 34.9831 76.673 34.9833C75.9112 34.9833 75.0892 34.9389 74.2067 34.8499C73.3244 34.7674 72.4134 34.6403 71.4738 34.469C70.5406 34.2975 69.5917 34.0723 68.6269 33.7931C67.6685 33.5139 66.7385 33.1741 65.8371 32.7741L67.0462 27.2897L67.3413 27.1391H67.6977C68.5134 27.5245 69.2961 27.8827 70.0457 28.2133C70.8518 28.5753 71.6327 28.88 72.3881 29.1274C73.1373 29.3751 73.8672 29.5685 74.578 29.7083C75.2953 29.848 76.0094 29.9179 76.7204 29.9176ZM67.9318 5.97979C68.5349 4.71664 69.395 3.64367 70.5123 2.76138C71.6294 1.87909 72.9753 1.19656 74.5495 0.714306C76.1173 0.238102 77.8726 0.000252227 79.815 0C80.3419 0 80.9575 0.0189173 81.6623 0.0572558C82.367 0.095342 83.1222 0.158903 83.9285 0.247687C84.7346 0.343029 85.5632 0.46662 86.4137 0.618965C87.2642 0.777615 88.1024 0.971325 88.9274 1.19984L87.7371 6.66534L87.3182 6.85577C86.5883 6.52561 85.8646 6.24967 85.1473 6.02746C84.4236 5.80525 83.7255 5.6181 83.0525 5.4655C82.3796 5.31946 81.748 5.21781 81.1576 5.16081C80.5671 5.09725 80.0498 5.06547 79.6056 5.06572C78.1139 5.06572 76.9237 5.38302 76.0348 6.01788C75.3914 6.47415 74.9793 7.08303 74.7984 7.84425H67.2853C67.4354 7.18972 67.6508 6.56824 67.9318 5.97979Z" fill="white"/>
            </svg>
          </a>
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
          <h6>Hero image by <a href='https://unsplash.com/@peter_forster'>Peter Forster</a></h6>
        </div>
      </section>
    </>
  )
}

export default Footer
