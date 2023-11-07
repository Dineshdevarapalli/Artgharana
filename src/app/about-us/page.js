import React from 'react'
import Image from 'next/image'
import { getAboutUsPageData } from '../utils/ServerCalls'
import styles from './aboutUs.module.scss'

const AboutUs = async () => {

    const PageData = await getAboutUsPageData()

    const Data = PageData?.data

    return (
        <div className={styles.about_us}>
            <div className="contain">
                <div className={styles.about_us_wrap}>
                    <div className={styles.title_area}>
                        <div className={styles.img}>
                            <Image
                                src="/images/logo.png"
                                alt="Artgharana"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                                sizes="150px"
                            />
                        </div>
                        <h1 className={styles.title}>
                            About Our <span>Gharana</span>
                        </h1>
                    </div>
                    <div className={styles.about_us_wrap_inner}>
                        {
                            Data?.attributes?.about_us?.map((item, index) => {
                                return (
                                    <div className={styles.about_item} key={index}>
                                        <p className={styles.about_item_title}>
                                            {...item.title.split(' ').filter((n, i) => i != [item.title.split(' ').length - 1]).map(n => `${n} `)}
                                            {
                                                <span>{item.title.split(' ')[item.title.split(' ').length - 1]}</span>
                                            }
                                        </p>
                                        <div className={styles.about_item_content}>
                                            <p className={styles.text}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs