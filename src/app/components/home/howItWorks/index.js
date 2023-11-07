"use client";
import React from 'react'
import Image from 'next/image'
import { Api } from '@/app/utils/Api'
import styles from './howItWorks.module.scss'

const HowItWorks = ({data}) => {

    const list = data?.how_it_work[0]

    return (
        <div className={styles.how_it_works}>
            <div className="contain">
                <p className={styles.title}>How It <span> Works?</span></p>
                <div className={styles.how_it_works_wrap}>
                    {
                        list.how_it_work.map((val, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <div className={styles.item_image}>
                                        <div className={styles.item_image_wrap}>
                                            <Image
                                                src={`${Api.imageUrl(val.image.url)}?w=100&q=75`}
                                                alt={val.title}
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                sizes="400px"
                                            />
                                        </div>
                                    </div>
                                    <p className={styles.item_title}>{val.title}</p>
                                    <p className={styles.item_text}>{val.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HowItWorks