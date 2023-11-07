"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { Api } from '@/app/utils/Api'
import Video from '../../common/video'
import PlayIcon from '../../../../../public/icons/play.svg'
import styles from './galleryItem.module.scss'

const GalleryItem = ({val}) => {

    const [Popup, SetPopup] = useState(false)

    return (
        <>
            <button className={styles.gallery_item} onClick={() => SetPopup(val)}>
                <div className={styles.gallery_item_image}>
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
                    <div className={styles.play_btn}>
                        <PlayIcon />
                    </div>
                </div>
                <div className={styles.gallery_item_content}>
                    <p className={styles.title}>{val.attributes.title}</p>
                    <p className={styles.text}>{val.attributes.short_description}</p>
                </div>
            </button>
            {
                Popup ?
                <Video Popup={Popup} SetPopup={SetPopup} {...{ val }} type="guru" /> : null
            }
        </>
    )
}

export default GalleryItem