"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick"
import Video from '../../common/video'
import LegendItem from './legendItem'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './legends.module.scss'

const Legends = ({data}) => {

    const [Popup, SetPopup] = useState(false)

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

    return (
        <>
            <div className={styles.legends}>
                <div className="contain">
                    <div className={styles.title_wrap}>
                        {
                            data.legend_section?.map(item => {
                                var words = item?.legend_section?.title;
                                var wordArray = words?.split(" ");
                                var firstTwoWords = wordArray?.slice(0, 3).join(" ");
                                var remainingWords = wordArray?.slice(3).join(" ");
                                return (
                                    <React.Fragment key={item.id}>
                                        <p className={styles.title}>{firstTwoWords}<span>{remainingWords}</span></p>
                                        <Link href='/contact-us' className={styles.btn}>
                                            Book A Free Trial
                                            <span>
                                                <ArrowIcon />
                                            </span>
                                        </Link>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className={styles.legends_wrap}>
                        <Slider {...settings}>
                            {
                                data.what_legend_says?.map((val, index) => (
                                    <LegendItem {...{ val, SetPopup, styles }} key={index} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            {
                Popup ?
                <Video Popup={Popup} SetPopup={SetPopup} {...{ val: Popup }} type="guru" /> : null
            }
        </>
    )
}

export default Legends