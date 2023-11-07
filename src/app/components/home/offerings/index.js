import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Api } from '@/app/utils/Api'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './offerings.module.scss'

const Offerings = ({data}) => {

    return (
        <div className={styles.offerings}>
            <div className="contain">
                <p className={styles.title}>Gharana <span>Offerings</span></p>
                <div className={styles.offerings_wrap}>
                    {
                        data.offering?.map((item) => {
                            return (
                                <Link
                                    href={{pathname: '/gharana-offerings', query: {tab:item.title}}} 
                                    className={styles.offering}
                                    key={item.id}
                                >
                                    <div className={styles.img}>
                                        <Image
                                            src={Api.imageUrl(item.image.url)}
                                            alt={item.title}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            sizes="650"
                                        />
                                    </div>
                                    <div className={styles.offering_content}>
                                        <p className={styles.title}>{item.title}</p>
                                        <p className={styles.text}>{item.short_description}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <Link href='/contact-us' className={`${styles.btn} ${styles.btn_block}`}>
                        Book A Free Trial
                        <span>
                            <ArrowIcon />
                        </span>
                    </Link>
                    <Link href='/gharana-offerings' className={`${styles.btn} ${styles.box}`}>
                        View all
                        <span>
                            <ArrowIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Offerings