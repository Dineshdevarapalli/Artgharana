import Link from 'next/link'
import { getFooterData, getBestSellerData } from '@/app/utils/ServerCalls'
import Logo from '../../../../public/icons/logo.svg'
import ArrowIcon from '../../../../public/icons/right_arrow.svg'
import FacebookIcon from '../../../../public/icons/facebook.svg'
import InstagramIcon from '../../../../public/icons/instagram.svg'
import LinkedInIcon from '../../../../public/icons/linkedin.svg'
import YouTubeIcon from '../../../../public/icons/youtube.svg'
import styles from './footer.module.scss'

const Footer = async () => {

    const [Data, BestSellerData] = await Promise.all([getFooterData(), getBestSellerData()])

    const BestSeller = BestSellerData?.data[0]?.attributes?.card.filter(n => n.best_seller)[0] || null

    return (
        <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div className='contain'>
                    <div className={styles.footer_top_wrap}>
                        <p className={styles.title}>Best Seller Private Sessions</p>
                        <p className={styles.text}>{Data?.data?.attributes?.Best_Seller}</p>
                        <Link href='/contact-us' className={styles.btn_box}>
                            Book A Free Trial
                            <span>
                                <ArrowIcon />
                            </span>
                        </Link>
                    </div>
                </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_bottom_main}>
                        <div className="contain">
                            <div className={styles.footer_bottom_main_wrap}>
                                <div className={styles.logo}>
                                    <Link href="/">
                                        <div className={styles.logo_block}>
                                            <Logo />
                                        </div>
                                    </Link>
                                    <p className={styles.text}>{Data?.data?.attributes?.footer_description}</p>
                                </div>
                                <div className={styles.menu}>
                                    <div className={styles.menu_item}>
                                        <p className={styles.menu_item_title}>About us</p>
                                        <ul>
                                            <li>
                                                <Link href="/about-us">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gharana-offerings">
                                                    Gharana Offering
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team-gharana">
                                                    Team Gharana
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.menu_item}>
                                        <p className={styles.menu_item_title}>Career</p>
                                        <ul>
                                            <li>
                                                <Link href="/become-a-teacher">
                                                    Become a teacher
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/join-our-sales-team">
                                                    Become a teacher
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.menu_item}>
                                        <p className={styles.menu_item_title}>Others</p>
                                        <ul>
                                            <li>
                                                <Link href="/privacy-policy">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-and-conditions">
                                                    Terms and Conditions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.menu_item}>
                                        <p className={styles.menu_item_title}>Stay up to date</p>
                                        <div className={styles.social}>
                                            <div className={styles.social_item}>
                                                <Link href={Data?.data?.attributes?.facebook || ""} target="_blank">
                                                    <FacebookIcon />
                                                </Link>
                                            </div>
                                            <div className={styles.social_item}>
                                                <Link href={Data?.data?.attributes?.instagram || ""} target="_blank">
                                                    <InstagramIcon />
                                                </Link>
                                            </div>
                                            <div className={styles.social_item}>
                                                <Link href={Data?.data?.attributes?.linked_in || ""} target="_blank">
                                                    <LinkedInIcon />
                                                </Link>
                                            </div>
                                            <div className={styles.social_item}>
                                                <Link href={Data?.data?.attributes?.youtube || ""} target="_blank">
                                                    <YouTubeIcon />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_bottom_meta}>
                        <div className="contain">
                            <div className={styles.footer_bottom_meta_wrap}>
                                <p>&copy; 2023 Art Gharana all rights reserved</p>
                                <p>Powered by  <a href="https://craftnotion.com/" target='_blank'>Craftnotion</a></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer