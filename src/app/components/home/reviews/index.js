"use client";
import React, { useState } from 'react'
import Slider from "react-slick"
import Image from 'next/image'
import { Api } from '@/app/utils/Api';
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import QuotesIcon from '../../../../../public/icons/quote-right.svg'
import styles from './reviews.module.scss'

const Reviews = ({data}) => {

    const [ReviewSelect, SetReviewSelect] = useState(false)

    return (
        <>
            <div className={styles.reviews}>
                <div className="contain">
                    <h1 className={styles.title}>Our <span>Reviews</span></h1>
                    <div className={styles.reviews_wrap}>
                        <Slider {...settings}>
                            {data.reviews?.map((item) => {
                                return (
                                    <div className={styles.review_item} key={item.name}>
                                        <div className={styles.review_item_meta}>
                                            <div className={styles.user}>
                                                <div className={styles.user_image}>
                                                    <Image
                                                        src={`${Api.imageUrl(item.image.url)}?w=100&q=75`}
                                                        alt={item.name}
                                                        fill
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        sizes="150px"
                                                    />
                                                </div>
                                                <p className={styles.user_name}>{item.name}</p>
                                            </div>
                                            <QuotesIcon className={styles.icon} />
                                        </div>
                                        <p className={styles.review_item_text}>{item.description}</p>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <button 
                        onClick={() => SetReviewSelect(!ReviewSelect)} className={styles.review_btn}
                    >
                        Write Review
                        <span>
                            <ArrowIcon />
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Reviews

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 992,
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