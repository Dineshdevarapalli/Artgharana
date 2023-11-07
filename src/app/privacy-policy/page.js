import React from 'react'
import { getPrivacyPolicyPageData } from '../utils/ServerCalls'
import styles from '../styles/textBlock.module.scss'

const PrivacyPolicy = async () => {

    const PageData = await getPrivacyPolicyPageData()

    const Data = PageData?.data?.attributes

    return (
        <div className={styles.text_block}>
            <div className="contain">
                <div className={styles.text_block_wrap}>
                    <div className={styles.title_area}>
                        <h1 className={styles.title}>
                            Terms & <span>Conditions</span>
                        </h1>
                    </div>
                    <div className={styles.text_block_wrap_inner}>
                        <p className={styles.text}>{Data.description}</p>
                        {
                            Data?.sections?.map((item, index) => {
                                return (
                                    <div className={styles.section} key={index}>
                                        <p className={styles.title}>{item?.title}</p>
                                        <p className={styles.text}>{item?.description}</p>
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

export default PrivacyPolicy