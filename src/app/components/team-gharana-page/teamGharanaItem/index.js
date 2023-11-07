"use client";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Api } from '@/app/utils/Api'
import CloseIcon from '../../../../../public/icons/circle-xmark.svg'
import styles from './teamGharanaItem.module.scss'

const TeamGharanaItem = ({
    val,
    index
}) => {

    const [Toggle, SetToggle] = useState(false)
    const buttonRef = useRef()

    useEffect(() => {
        document.addEventListener('click', handleClikOutSide, true);
        return () => {
            document.removeEventListener('click', handleClikOutSide, true);
        }
    }, [])

    const handleClikOutSide = () => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            SetToggle("")
        }
    }

    function isInSecond(number) {
        return (number - 2) % 3 === 0 && number >= 2;
    }

    function isInThird(number) {
        return number % 3 === 0 && number >= 3;
    }

    return (
        <>
            <div className={`${styles.team_item} ${isInSecond(index + 1) ? styles.second : ''} ${isInThird(index + 1) ? styles.third : ''}`}>
                <div className={styles.team_item_image}>
                    <Image
                        src={Api.imageUrl(val?.attributes?.image?.data?.attributes?.url)}
                        alt={val.attributes.name}
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        sizes="750px"
                    />
                </div>
                <div className={styles.team_item_content} onClick={() => {
                    SetToggle(true)
                }}>
                    <p className={styles.title}>{val?.attributes?.name}</p>
                    <p className={styles.role} title={styles.role}>{val?.attributes?.skill}</p>
                    <button>Learn More</button>
                </div>
            </div>
            {
                Toggle ?
                <div className={styles.content_popper}>
                    <div className={styles.content_popper_box} ref={buttonRef}>
                        <div className={styles.content}>
                            <div className={styles.title_wrap}>
                                <div className={styles.title_wrap_content}>
                                    <p className={styles.title}>{val?.attributes?.name}</p>
                                    <p className={styles.role} title={styles.role}>{val?.attributes?.skill}</p>
                                </div>
                                <button onClick={()=>SetToggle(false)}>
                                    <CloseIcon/>
                                </button>
                            </div>
                            <p className={styles.text}>
                                {val?.attributes?.description}
                            </p>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default TeamGharanaItem