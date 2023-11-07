import React from 'react'
import Link from 'next/link'
import ArrowIcon from '../../../../../public/icons/right_arrow.svg'
import OurGuruItem from './ourGuruItem'
import styles from './ourGurus.module.scss'

const OurGurus = ({data}) => {

    return (
        <div className={styles.our_gurus}>
            <div className="contain">
                <div className={styles.our_gurus_wrap}>
                    {
                        data.gurus_section?.map(item => {
                            var words = item?.gurus_section?.title;
                            var wordArray = words?.split(" ");
                            var firstTwoWords = wordArray?.slice(0, 2).join(" ");
                            var remainingWords = wordArray?.slice(2).join(" ");
                            return (
                                <p className={styles.title} key={item.id}>{firstTwoWords} <span>{remainingWords}</span></p>
                            )
                        })
                    }
                    <div className={styles.our_gurus_wrap_row}>
                        <div className={styles.our_gurus_wrap_column}>
                            {
                                data.gurus_section?.map(item => {
                                    return (
                                        <p className={styles.text} key={item.id}>{item.description} </p>
                                    )
                                })}
                            <p className={styles.btn} >
                                <Link href='/team-gharana' style={{
                                    display: "flex",
                                    color: "white",
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    View All Gurus
                                    <span><ArrowIcon /></span>
                                </Link>
                            </p>
                            {
                                data.gurus?.map((val, index) => {
                                    return (
                                        index === 0 &&
                                        <div className={styles.card} key={val.id}>
                                            <OurGuruItem {...{ val, styles }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.our_gurus_wrap_column}>
                            {
                                data.gurus?.map((val, index) => {
                                    return (
                                        index >= 1 && index <= 2 &&
                                        <div className={styles.card} key={val.id}>
                                            <OurGuruItem {...{ val, styles }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.our_gurus_wrap_column}>
                            {
                                data.gurus?.map((val, index) => {
                                    return (
                                        index >= 3 && index <= 4 &&
                                        <div className={styles.card} key={val.id}>
                                            <OurGuruItem {...{ val, styles }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGurus