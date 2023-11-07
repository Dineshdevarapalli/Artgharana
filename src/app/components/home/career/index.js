"use client";
import React from 'react'
import Image from 'next/image'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './career.module.scss'

const CareerBlock = ({data}) => {
    return (
        <>
            <div className={styles.careers_block}>
                <div className='contain'>
                    <div className={styles.careers_block_wrap}>
                        <div className={styles.title_area}>
                            {
                                data.becom_a_teacher_section?.map(item => {
                                    var words = item?.becom_a_teacher_section?.title;
                                    var wordArray = words?.split(" ");
                                    var firstTwoWords = wordArray?.slice(0, 4).join(" ");
                                    var remainingWords = wordArray?.slice(4).join(" ");

                                    return (
                                        <React.Fragment key={item.id}>
                                            <p className={styles.title}>{firstTwoWords} <span>{remainingWords}</span></p>
                                            <p className={styles.text}>{item.becom_a_teacher_section?.description}</p>
                                        </React.Fragment>
                                    )
                                })
                            }

                        </div>
                        <div className={styles.careers_block_wrap_inner}>
                            <div className={styles.careers_block_wrap_inner_image}>
                                <Image
                                    src='/images/become_a_teacher.jpg'
                                    alt='careers section'
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    sizes="600px"
                                />
                                <div className={styles.btn_box}>
                                    <p className={styles.title}>Join Art Gharana Now!</p>
                                    <button 
                                        className={styles.btn} 
                                        onClick={() => SetNewPopup(!NewPopup)}
                                    >
                                        Become a Teacher
                                        <span><ArrowIcon /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerBlock