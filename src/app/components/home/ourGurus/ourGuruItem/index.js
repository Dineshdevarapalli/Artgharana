"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Video from '@/app/components/common/video'
import PlayIcon from '../../../../../../public/icons/play.svg'
import { Api } from '@/app/utils/Api'

const OurGuruItem = ({
    val, styles
}) => {

    const [Popup, SetPopup] = useState(false)

    return (
        <>
            <button className={styles.guru_item} onClick={() => SetPopup(val)}>
                <div className={styles.guru_item_image}>
                    <Image
                        src={Api.imageUrl(val.image.url)}
                        alt={val.title}
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
                <div className={styles.guru_item_content}>
                    <p className={styles.title}>{val.title}</p>
                    <p className={styles.text}>{val.short_description}</p>
                </div>
            </button>
            {
                Popup ?
                <Video Popup={Popup} SetPopup={SetPopup} {...{ val: Popup }} type="guru" /> : null
            }
        </>
    )
}

export default OurGuruItem