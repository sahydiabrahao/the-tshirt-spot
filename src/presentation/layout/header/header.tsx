import Styles from './header-styles.scss'
import React, { useState } from 'react'
import { FaBars, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { showModal } from '@/presentation/redux/modal-slice'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const numOfCartItems = useAppSelector(state => state.cartCounter.numOfCartItems)

  const [showMenuPhone, setShowMenuPhone] = useState(false)

  const onMenuPhone = (): any => {
    setShowMenuPhone(true)
    document.body.style.position = 'fixed'
  }

  const onCloseMenuPhone = (): any => {
    setShowMenuPhone(false)
    document.body.style.position = ''
  }

  const shoppingCartMobile = (): any => {
    setShowMenuPhone(false)
    document.body.style.position = ''
    dispatch(showModal())
  }

  const MenuPhone = (): any => {
    return (
    <div className={Styles.menuPhone} >
    <a href="#header" onClick={shoppingCartMobile}>Cart</a>
    <a href="/" onClick={onCloseMenuPhone}>T-shirt</a>
    <a href="/design" onClick={onCloseMenuPhone}>Design</a>
    <a href="/tint" onClick={onCloseMenuPhone}>Tint</a>

    <FaPlus className={Styles.closeIcon} onClick={onCloseMenuPhone} />
  </div>)
  }

  return (
    <>
      <section id='header' className={Styles.header}>
        <a href="/">

        <svg className={Styles.ttsLogo} width="91" height="35" viewBox="0 0 91 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 25.5469V9.4364H90.2074V25.5469H0Z" fill="#5702CF"/>
<path d="M2.38818 23.1585V11.8247H87.8189V23.1585H2.38818Z" fill="#5702CF"/>
<path d="M8.29681 15.2501V20.6827H6.75838V15.2501H4.77734L4.94689 14.2988H10.3011L10.1315 15.2501H8.29681ZM12.8889 20.6827H11.3505V14.2988H12.8889V16.9098H15.5338V14.2988H17.0723V20.6827H15.5338V17.8593H12.8889V20.6827ZM22.6977 20.6827H18.6571V14.2988H22.8226L22.6531 15.2501H20.1955V16.9438H22.339L22.1837 17.829H20.1955V19.7333H22.8673L22.6977 20.6827ZM28.9353 15.2501V20.6827H27.3969V15.2501H25.4158L25.5854 14.2988H30.9395L30.77 15.2501H28.9353ZM33.5363 19.8207C33.6731 19.8207 33.804 19.8053 33.929 19.7743C34.0539 19.7434 34.1639 19.6964 34.2591 19.6333C34.3555 19.5691 34.4328 19.4876 34.4911 19.3888C34.5494 19.2901 34.5786 19.1723 34.5786 19.0354C34.5786 18.8724 34.5375 18.7344 34.4554 18.6214C34.3745 18.5084 34.2663 18.409 34.1306 18.3233C33.9962 18.2377 33.8433 18.1591 33.672 18.0878C33.5006 18.0164 33.3257 17.9426 33.1472 17.8665C32.9676 17.7891 32.7933 17.7035 32.6243 17.6095C32.4542 17.5143 32.3013 17.4 32.1657 17.2668C32.0312 17.1335 31.9229 16.9747 31.8408 16.7903C31.7599 16.6058 31.7195 16.3857 31.7195 16.1299C31.7195 15.836 31.776 15.5707 31.889 15.3339C32.0021 15.0972 32.1633 14.8961 32.3727 14.7307C32.5821 14.5653 32.8343 14.4374 33.1294 14.347C33.4245 14.2578 33.7535 14.2131 34.1164 14.2131C34.2151 14.2131 34.3305 14.2167 34.4626 14.2238C34.5947 14.231 34.7362 14.2429 34.8874 14.2595C35.0385 14.2774 35.1937 14.3006 35.3532 14.3291C35.5126 14.3589 35.6697 14.3952 35.8243 14.438L35.6012 15.4624L35.5227 15.4981C35.3871 15.4363 35.2514 15.3845 35.1158 15.3429C34.9813 15.3012 34.8505 15.2661 34.7232 15.2376C34.597 15.2102 34.4786 15.1912 34.368 15.1805C34.2585 15.1686 34.1616 15.1626 34.0771 15.1626C33.7975 15.1626 33.5744 15.2221 33.4078 15.3411C33.2412 15.4601 33.158 15.6344 33.158 15.864C33.158 16.027 33.1984 16.1644 33.2793 16.2763C33.3602 16.3881 33.4685 16.4875 33.6041 16.5743C33.7386 16.6612 33.8915 16.7403 34.0628 16.8117C34.2353 16.8831 34.4108 16.958 34.5893 17.0366C34.7678 17.1139 34.9427 17.1996 35.114 17.2936C35.2853 17.3864 35.4382 17.4994 35.5727 17.6327C35.7083 17.7659 35.8166 17.9236 35.8975 18.1056C35.9796 18.2865 36.0206 18.5036 36.0206 18.757C36.0206 19.0533 35.9623 19.324 35.8457 19.5691C35.7291 19.8154 35.5626 20.0278 35.346 20.2062C35.1307 20.3847 34.8695 20.5233 34.5625 20.6221C34.2556 20.7208 33.9105 20.7702 33.5274 20.7702C33.3858 20.7702 33.2317 20.7619 33.0652 20.7452C32.8998 20.7297 32.7296 20.7059 32.5547 20.6738C32.3786 20.6417 32.2002 20.5995 32.0193 20.5471C31.8396 20.4948 31.6653 20.4311 31.4964 20.3561L31.723 19.3281L31.8105 19.2835C31.9759 19.3621 32.1341 19.4346 32.2852 19.5013C32.4363 19.5691 32.5827 19.6262 32.7243 19.6726C32.8647 19.719 33.0015 19.7553 33.1348 19.7815C33.2692 19.8076 33.4031 19.8207 33.5363 19.8207ZM38.7423 20.6827H37.2039V14.2988H38.7423V16.9098H41.3873V14.2988H42.9257V20.6827H41.3873V17.8593H38.7423V20.6827ZM46.049 14.2988V20.6827H44.5106V14.2988H46.049ZM49.9843 18.3216H49.174V20.6827H47.6356V14.2988H49.9272C50.3424 14.2988 50.7041 14.344 51.0123 14.4344C51.3205 14.5249 51.5769 14.6462 51.7815 14.7985C51.9862 14.9508 52.139 15.1275 52.2402 15.3286C52.3425 15.5285 52.3937 15.7391 52.3937 15.9604C52.3937 16.1603 52.3556 16.3494 52.2794 16.5279C52.2045 16.7064 52.1075 16.8706 51.9885 17.0205C51.8696 17.1704 51.7363 17.3066 51.5888 17.4292C51.4424 17.5529 51.2996 17.6612 51.1604 17.754L52.9469 20.6827H51.1604L49.9843 18.3216ZM49.174 15.2501V17.4363H50.2752C50.3573 17.3935 50.4352 17.3352 50.509 17.2614C50.5828 17.1889 50.6482 17.1056 50.7053 17.0116C50.7612 16.9176 50.807 16.8123 50.8427 16.6957C50.8772 16.5791 50.8945 16.453 50.8945 16.3173C50.8945 16.1662 50.8713 16.0252 50.8249 15.8943C50.7785 15.7635 50.7089 15.6498 50.6161 15.5535C50.5233 15.4583 50.4085 15.3839 50.2716 15.3304C50.1348 15.2768 49.9748 15.2501 49.7915 15.2501H49.174ZM56.793 15.2501V20.6827H55.2546V15.2501H53.2735L53.4431 14.2988H58.7972L58.6277 15.2501H56.793ZM63.2465 19.8207C63.3822 19.8207 63.5125 19.8053 63.6374 19.7743C63.7623 19.7434 63.873 19.6964 63.9694 19.6333C64.0645 19.5691 64.1413 19.4876 64.1996 19.3888C64.2579 19.2901 64.287 19.1723 64.287 19.0354C64.287 18.8724 64.2466 18.7344 64.1657 18.6214C64.0836 18.5084 63.9753 18.409 63.8409 18.3233C63.7052 18.2377 63.5517 18.1591 63.3804 18.0878C63.2091 18.0164 63.0342 17.9426 62.8557 17.8665C62.6772 17.7891 62.5029 17.7035 62.3328 17.6095C62.1626 17.5143 62.0103 17.4 61.8759 17.2668C61.7402 17.1335 61.632 16.9747 61.5511 16.7903C61.469 16.6058 61.4279 16.3857 61.4279 16.1299C61.4279 15.836 61.485 15.5707 61.5992 15.3339C61.7123 15.0972 61.8735 14.8961 62.0829 14.7307C62.2911 14.5653 62.5428 14.4374 62.8378 14.347C63.1329 14.2578 63.4619 14.2131 63.8248 14.2131C63.9235 14.2131 64.039 14.2167 64.171 14.2238C64.3031 14.231 64.4447 14.2429 64.5958 14.2595C64.7469 14.2774 64.9028 14.3006 65.0634 14.3291C65.2228 14.3589 65.3793 14.3952 65.5328 14.438L65.3115 15.4624L65.2329 15.4981C65.0961 15.4363 64.9605 15.3845 64.826 15.3429C64.6904 15.3012 64.5595 15.2661 64.4334 15.2376C64.3073 15.2102 64.1889 15.1912 64.0782 15.1805C63.9676 15.1686 63.87 15.1626 63.7855 15.1626C63.5071 15.1626 63.2846 15.2221 63.118 15.3411C62.9503 15.4601 62.8664 15.6344 62.8664 15.864C62.8664 16.027 62.9068 16.1644 62.9878 16.2763C63.0699 16.3881 63.1781 16.4875 63.3126 16.5743C63.4482 16.6612 63.6017 16.7403 63.773 16.8117C63.9444 16.8831 64.1193 16.958 64.2977 17.0366C64.4762 17.1139 64.6511 17.1996 64.8224 17.2936C64.9938 17.3864 65.1473 17.4994 65.2829 17.6327C65.4174 17.7659 65.5256 17.9236 65.6077 18.1056C65.6886 18.2865 65.7291 18.5036 65.7291 18.757C65.7291 19.0533 65.6708 19.324 65.5542 19.5691C65.4388 19.8154 65.2728 20.0278 65.0563 20.2062C64.8397 20.3847 64.5779 20.5233 64.271 20.6221C63.9652 20.7208 63.6207 20.7702 63.2376 20.7702C63.0948 20.7702 62.9408 20.7619 62.7754 20.7452C62.61 20.7297 62.4393 20.7059 62.2632 20.6738C62.0871 20.6417 61.9092 20.5995 61.7295 20.5471C61.5499 20.4948 61.3756 20.4311 61.2066 20.3561L61.4333 19.3281L61.5207 19.2835C61.6861 19.3621 61.8443 19.4346 61.9955 19.5013C62.1466 19.5691 62.2923 19.6262 62.4327 19.6726C62.5743 19.719 62.7117 19.7553 62.845 19.7815C62.9782 19.8076 63.1121 19.8207 63.2465 19.8207ZM68.4526 15.2501V20.6827H66.9141V14.2988H69.2057C69.6269 14.2988 70.0005 14.3464 70.3265 14.4416C70.6513 14.5356 70.925 14.6712 71.1475 14.8485C71.37 15.0258 71.5378 15.2393 71.6508 15.4892C71.7638 15.7391 71.8203 16.0205 71.8203 16.3334C71.8203 16.6737 71.7585 16.9818 71.6347 17.2579C71.511 17.5339 71.3432 17.7683 71.1314 17.961C70.9196 18.155 70.6722 18.3043 70.389 18.409C70.1058 18.5125 69.8042 18.5643 69.4841 18.5643C69.4377 18.5643 69.3931 18.5631 69.3503 18.5607C69.3063 18.5583 69.2551 18.5524 69.1968 18.5429L69.2718 17.6719C69.2944 17.6779 69.3235 17.6814 69.3592 17.6826C69.3937 17.6838 69.4252 17.6844 69.4538 17.6844C69.599 17.6844 69.7263 17.6535 69.8357 17.5916C69.944 17.5285 70.0338 17.4435 70.1052 17.3364C70.1766 17.2293 70.2307 17.1044 70.2676 16.9616C70.3033 16.8188 70.3212 16.6665 70.3212 16.5047C70.3212 16.2775 70.2932 16.0847 70.2373 15.9265C70.1802 15.7682 70.0987 15.6391 69.9928 15.5392C69.8869 15.4392 69.759 15.3661 69.6091 15.3197C69.4592 15.2733 69.2914 15.2501 69.1058 15.2501H68.4526ZM76.0983 19.8207C76.3684 19.8207 76.6093 19.7583 76.8211 19.6333C77.0341 19.5084 77.2132 19.3406 77.3583 19.13C77.5035 18.9194 77.6135 18.6749 77.6885 18.3965C77.7646 18.1193 77.8027 17.8296 77.8027 17.5274C77.8027 17.2025 77.7605 16.8974 77.676 16.6118C77.5915 16.3251 77.4719 16.074 77.3173 15.8586C77.1614 15.6445 76.974 15.4749 76.7551 15.35C76.535 15.2251 76.2917 15.1626 76.0251 15.1626C75.755 15.1626 75.5147 15.2257 75.3041 15.3518C75.0935 15.4779 74.9162 15.6463 74.7723 15.8569C74.6283 16.0675 74.5182 16.3114 74.4421 16.5886C74.3671 16.8658 74.3297 17.1555 74.3297 17.4578C74.3297 17.7838 74.3719 18.0895 74.4564 18.3751C74.5408 18.6618 74.6598 18.9117 74.8133 19.1247C74.9668 19.3388 75.1524 19.5084 75.3701 19.6333C75.5891 19.7583 75.8318 19.8207 76.0983 19.8207ZM75.9502 20.7702C75.4945 20.7702 75.0709 20.6994 74.6795 20.5578C74.2892 20.4174 73.9501 20.2128 73.6622 19.9439C73.3754 19.675 73.15 19.346 72.9858 18.9569C72.8216 18.5679 72.7395 18.1252 72.7395 17.6291C72.7395 17.1198 72.8257 16.6558 72.9983 16.237C73.1708 15.817 73.4105 15.4571 73.7175 15.1573C74.0245 14.8586 74.3874 14.6266 74.8062 14.4612C75.2262 14.2958 75.6849 14.2131 76.1822 14.2131C76.6343 14.2131 77.0561 14.2827 77.4476 14.4219C77.8378 14.5612 78.1769 14.7652 78.4648 15.0341C78.7528 15.303 78.9783 15.632 79.1413 16.0211C79.3054 16.4101 79.3875 16.8527 79.3875 17.3489C79.3875 17.6892 79.3489 18.0098 79.2715 18.3109C79.193 18.6107 79.0818 18.8879 78.9378 19.1425C78.7938 19.3971 78.6189 19.6244 78.4131 19.8243C78.2061 20.0242 77.9758 20.1949 77.7224 20.3365C77.4678 20.4769 77.1917 20.5846 76.8943 20.6595C76.5957 20.7333 76.2809 20.7702 75.9502 20.7702ZM83.4264 15.2501V20.6827H81.8897V15.2501H79.9069L80.0764 14.2988H85.4306L85.2611 15.2501H83.4264Z" fill="white"/>
<path d="M19.0182 5.53234V7.84425H10.8105V5.53234H0.241211L1.1457 0.457035H29.7111L28.8066 5.53234H19.0182ZM19.0182 34.5167H10.8105V27.1391H19.0182V34.5167ZM52.1732 5.53234V7.84425H43.9655V5.53234H33.3866L34.2913 0.457035H62.8663L61.9616 5.53234H52.1732ZM52.1732 34.5167H43.9655V27.1391H52.1732V34.5167ZM76.7204 29.9176C77.4503 29.9176 78.1487 29.8351 78.8154 29.6702C79.482 29.5052 80.0692 29.2545 80.5767 28.9178C81.091 28.575 81.5003 28.1402 81.805 27.6133C81.8936 27.4635 81.9695 27.3053 82.0328 27.1391H89.5787C89.4379 27.6347 89.2591 28.1134 89.0417 28.575C88.4197 29.8891 87.5308 31.0221 86.3756 31.9743C85.2204 32.9264 83.8269 33.666 82.1955 34.1929C80.5578 34.7198 78.7168 34.9831 76.673 34.9833C75.9112 34.9833 75.0892 34.9389 74.2067 34.8499C73.3244 34.7674 72.4134 34.6403 71.4738 34.469C70.5406 34.2975 69.5917 34.0723 68.6269 33.7931C67.6685 33.5139 66.7385 33.1741 65.8371 32.7741L67.0462 27.2897L67.3413 27.1391H67.6977C68.5134 27.5245 69.2961 27.8827 70.0457 28.2133C70.8518 28.5753 71.6327 28.88 72.3881 29.1274C73.1373 29.3751 73.8672 29.5685 74.578 29.7083C75.2953 29.848 76.0094 29.9179 76.7204 29.9176ZM67.9318 5.97979C68.5349 4.71664 69.395 3.64367 70.5123 2.76138C71.6294 1.87909 72.9753 1.19656 74.5495 0.714306C76.1173 0.238102 77.8726 0.000252227 79.815 0C80.3419 0 80.9575 0.0189173 81.6623 0.0572558C82.367 0.095342 83.1222 0.158903 83.9285 0.247687C84.7346 0.343029 85.5632 0.46662 86.4137 0.618965C87.2642 0.777615 88.1024 0.971325 88.9274 1.19984L87.7371 6.66534L87.3182 6.85577C86.5883 6.52561 85.8646 6.24967 85.1473 6.02746C84.4236 5.80525 83.7255 5.6181 83.0525 5.4655C82.3796 5.31946 81.748 5.21781 81.1576 5.16081C80.5671 5.09725 80.0498 5.06547 79.6056 5.06572C78.1139 5.06572 76.9237 5.38302 76.0348 6.01788C75.3914 6.47415 74.9793 7.08303 74.7984 7.84425H67.2853C67.4354 7.18972 67.6508 6.56824 67.9318 5.97979Z" fill="white"/>
</svg>
        </a>
        <div className={Styles.menu}>
          <a href="/"><h5>T-shirt</h5></a>
          <a href="/design"><h5>Design</h5></a>
          <a href="/tint"><h5>Tint</h5></a>
        </div>
        <a className={Styles.menuIcon} onClick={() => dispatch(showModal())}>
          <FaShoppingCart className={Styles.cartIcon}/>
          {numOfCartItems === 0 ? null : <span>{numOfCartItems}</span>}
        </a>
        <a className={Styles.menuHamburguerIcon} onClick={onMenuPhone}>
          <FaBars className={Styles.hamburguerIcon}/>
        </a>
        { showMenuPhone ? <MenuPhone /> : null }
      </section>
    </>
  )
}

export default Header
