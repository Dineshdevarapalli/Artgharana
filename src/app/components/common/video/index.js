import React, { useRef, useEffect } from 'react'
import { Api } from '@/app/utils/Api'
import CloseIcon from '../../../../../public/icons/circle-xmark.svg'
import styles from './video.module.scss'

const Video = ({ Popup, SetPopup, type, val, items }) => {

    const buttonRef = useRef()

    useEffect(() => {
        document.addEventListener('click', handleClikOutSide, true);
        return () => {
            document.removeEventListener('click', handleClikOutSide, true);
        }
    }, [])

    const handleClikOutSide = () => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            SetPopup("")
        }
    }

    return (
        <div>
            <div className={styles.main_container} >
             <div className={styles.wrapper}>
                <div className={styles.video_play} ref={buttonRef}>
                    <video controls autoPlay type="video/mp4">
                        <source src={ Popup || type==="guru" ? Api.imageUrl(val?.video?.url || val?.attributes?.video?.data?.attributes?.url) : null}/>
                    </video>
                </div>
                <button className={styles.close_icon} onClick={() => SetPopup(null)}>
                    <span> <CloseIcon/> </span>
                </button>
             </div>
            </div>
        </div>
    )
}

export default Video