"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../../../../public/icons/logo.svg'
import ArrowIcon from '../../../../public/icons/right_arrow.svg'
import MenuIcon from '../../../../public/icons/menu-burger.svg'
import CloseIcon from '../../../../public/icons/circle-xmark.svg'
import styles from './header.module.scss'

const Header = () => {

    const pathname = usePathname()
    const [Toggle, SetToggle] = useState(false)

    useEffect(() => {
        SetToggle(false)
	}, [pathname])

    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.logo}>
                    <Link href="/">
                        <div className={styles.logo_block}>
                            <Logo />
                        </div>
                    </Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/gharana-offerings">
                            Gharana Offerings
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/team-gharana">
                            Team Gharana
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us">
                            Contact Us
                        </Link>
                    </li>
		  <li>
	                <Link href="https://portal.artgharana.com/">
                            Log in
	               </Link>
                    </li>
                </ul>
            </div>
            {
                Toggle ? 
                <div className={`${styles.menu_bar} ${Toggle ? styles.active : ''}`}>
                    <div>
                        <ul className={styles.menus}>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/gharana-offerings">
                                    Gharana Offerings
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/team-gharana">
                                    Team Gharana
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.close_icon}>
                            <button onClick={() => SetToggle(!Toggle)}>
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className={styles.header_rights}>
                        <Link href='/plans-and-pricing'>
                            <p className={styles.pricing}>
                                Plans and Pricing
                                <span>
                                    <ArrowIcon />
                                </span>
                            </p>
                        </Link>
                    </div>
                </div> : null
            }
            <div className={styles.header_right}>
                <Link href='/plans-and-pricing'>
                    <p className={styles.pricing}>
                        Plans and Pricing
                        <span>
                            <ArrowIcon />
                        </span>
                    </p>
                </Link>
            </div>
            <div className={styles.main_menu}>
                <button onClick={() => SetToggle(!Toggle)}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    )
}

export default Header
