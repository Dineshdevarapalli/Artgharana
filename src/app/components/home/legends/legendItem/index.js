import React from 'react'
import Image from 'next/image'
import { Api } from '@/app/utils/Api'
import ArrowIcon from '../../../../../../public/icons/right_arrow.svg'
import PlayIcon from '../../../../../../public/icons/play.svg'

const LegendItem = ({
    val,
    SetPopup,
    styles
}) => {

    return (
        <button 
            className={styles.legend_item} 
            onClick={() => SetPopup(val)}
        >
            <div className={styles.legend_item_image} >
                <Image
                    src={Api.imageUrl(val?.image?.url)}
                    alt="legend image"
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
            <div className={styles.legend_item_title}>
                <p>{val?.name}</p>
                <span>
                    <ArrowIcon />
                </span>
            </div>
            <p className={styles.text}>{val.skill}</p>
        </button>
    )
}

export default LegendItem