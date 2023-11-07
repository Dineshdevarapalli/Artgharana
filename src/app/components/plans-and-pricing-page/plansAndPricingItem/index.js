import React from 'react'
import CheckIcon from '../../../../../public/icons/check.svg'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './plansAndPricingItem.module.scss'

const PlansAndPricingItem = ({val}) => {
    return (
        <div className={styles.package}>
            <p className={styles.title}>{val?.title}</p>
            <div className={styles.package_box}>
                <div className={styles.package_box_content}>
                    <p className={styles.price}>
                        {val?.price?.currency}
                        {val?.price?.price} 
                        <span> / {val?.price?.per}</span>
                    </p>
                    <p className={styles.text}>{val?.description}</p>
                </div>
                <div className={styles.list}>
                    {
                        val?.features?.map((n, index) => {
                            return (
                                <div className={styles.text_box} key={index}>
                                    <CheckIcon className={styles.icon} />
                                    <p className={styles.text}>
                                        {n.feature}
                                        <span> {n.price_description}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <button 
                    onClick={() => {
                        val?.payment_link && window.open(val.payment_link)
                    }}
                >
                    <p>
                        Buy Now
                        <span>
                            <ArrowIcon />
                        </span>
                    </p>
                </button>
            </div>
        </div>
    )
}

export default PlansAndPricingItem