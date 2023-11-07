"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { DateTime } from "luxon"
import { Api } from '@/app/utils/Api'
import HeartIcon from '../../../../../public/icons/heart.svg'
import HeartFillIcon from '../../../../../public/icons/heart_01.svg'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './blogItem.module.scss'

const BlogItem = ({val}) => {

    const [ReadMore, SetReadMore] = useState(false)
    const [Favourite, SetFavourite] = useState(false)

    return (
        <div className={styles.blog_item}>
            <div className={styles.blog_item_image}>
                <Image
                    src={Api.imageUrl(val?.attributes?.image?.data?.attributes?.url)}
                    alt={val?.attributes?.title}
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    sizes="750px"
                />
                <div className={styles.blog_item_image_content}>
                    <div className={styles.blog_item_image_content_inner}>
                        <p className={styles.title}>{val?.attributes?.source}</p>
                        <p className={styles.text}>{DateTime.fromISO(val?.attributes?.publishedAt).toFormat('MMMM dd, yyyy')}</p>
                    </div>
                    <button onClick={() => SetFavourite(!Favourite)}>
                        {
                            Favourite ?
                            <HeartFillIcon className={styles.fill}/>:
                            <HeartIcon className={styles.empty_icon}/>
                        }
                    </button>
                </div>
            </div>
            <div className={styles.blog_item_content}>
                <h2 className={styles.title}>{val?.attributes?.title}</h2>
                <p className={`${styles.text} ${ReadMore ? styles.active : ""}`}>
                    {val?.attributes?.description}
                </p> 
                <button onClick={() => SetReadMore(!ReadMore)}>
                    Read {ReadMore ? 'Less' : 'More'}
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default BlogItem