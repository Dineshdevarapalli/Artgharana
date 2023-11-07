import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Api } from '@/app/utils/Api'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import styles from './joinOurGharana.module.scss'

const JoinOurGharana = ({data}) => {

    return (
        <div className={styles.join_our_gharana}>
            <div className="contain">
                <div className={styles.join_our_gharana_wrap}>
                    {
                        data?.join_gharana_section?.map(item => {
                            var words = item?.join_gharana_section?.title;
                            var wordArray = words.split(" ");
                            var firstTwoWords = wordArray.slice(0, 2).join(" ");
                            var remainingWords = wordArray.slice(2).join(" ");
                            return (
                                <React.Fragment key={item.id}>
                                    <div className={styles.block_content}>
                                        <p className={styles.title}>
                                            <span>{firstTwoWords}</span>
                                            {remainingWords}
                                        </p>
                                        <div className={styles.content}>
                                            <p className={styles.text}>{item.join_gharana_section.description}</p>
                                            <Link href='/contact-us' className={styles.btn}>
                                                Book A Free Trial
                                                <span><ArrowIcon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.block_image}>
                                        <Image
                                            src={Api.imageUrl(item?.join_gharana_section.image?.url)}
                                            alt="show image"
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            sizes="1280px"
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default JoinOurGharana