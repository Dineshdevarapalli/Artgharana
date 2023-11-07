import React from 'react'
import { getTermsAndConditionsPageData } from '../utils/ServerCalls'
import styles from '../styles/textBlock.module.scss'

const TermsAndConditions = async () => {

    const PageData = await getTermsAndConditionsPageData()

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
                        <ol>
                            {
                                Data?.sections?.map((item, index) => {
                                    return (
                                        <li key={item.id}>
                                            <span>{item?.title}: </span>
                                            {item?.description}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>    
            </div>    
        </div>
    )
}

export default TermsAndConditions