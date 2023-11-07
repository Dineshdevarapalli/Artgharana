"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick"
import { Api } from '@/app/utils/Api'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './showcase.module.scss'

const Showcase = ({data}) => {  
    
    const swiperSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className={styles.showcase}>
                {
                    data?.banner?.map(item => {
                        var words = item?.banner?.title;
                        var wordArray = words?.split(" ");
                        var firstTwoWords = wordArray?.slice(0, 2).join(" ");
                        var remainingWords = wordArray?.slice(2).join(" ");
                        return (
                            <div className={styles.showcase_wrap} key={item.id}>
                                <div className={styles.showcase_wrap_content}>
                                    <h2 className={styles.title}>
                                        <span className={styles.color_orange}>{firstTwoWords}</span>
                                        {remainingWords}
                                    </h2>
                                    <p className={styles.text}>{item.banner?.description}</p>
                                    <Link href='/contact-us' className={styles.btn}>
                                        Book a Free Trial
                                        <span>
                                            <ArrowIcon />
                                        </span>
                                    </Link>
                                </div>
                                <div className={styles.showcase_wrap_image}>
                                    <div className={styles.image_block}>
                                        <Image
                                            src={Api.imageUrl(item.banner?.image?.url)}
                                            alt="ArtGharana"
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            sizes="400px"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.showcase_images}>
                <div className='contain'>
                    <div className={styles.showcase_images_wrap}>
                        {
                            data.images?.map(item => {
                                return (
                                    <React.Fragment key={item.id}>
                                        {
                                            item?.images?.map(val => {
                                                return (
                                                    <div className={styles.img_block} key={val.id}>
                                                        <Image
                                                            src={Api.imageUrl(val?.url)}
                                                            alt="show image"
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center'
                                                            }}
                                                            sizes="400px"
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </React.Fragment >
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.showcase_images_swiper}>
                <div className='contain'>
                    <div className={styles.showcase_images_swiper_wrap}>
                        {
                            data.images?.map(item => {
                                return (
                                    <Slider {...swiperSettings} key={item.id}>
                                        {
                                            item?.images?.map(val => {
                                                return (
                                                    <div className={styles.img_block} key={val.id}>
                                                        <Image
                                                            src={Api.imageUrl(val?.url)}
                                                            alt="show image"
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center'
                                                            }}
                                                            sizes="400px"
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase