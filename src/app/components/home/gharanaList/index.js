import React from 'react'
import MusicIcon from '../../../../../public/icons/music-alt.svg'
import styles from './GharanaList.module.scss'

const GharanaList = ({data}) => {
    
    return (
        <div className={styles.gharana_list}>
            <div className="contain">
                <p className={styles.title}>A <span>Gharana</span> you have been waiting for!</p>
                <div className={styles.gharana_list_wrap}>
                    <div className={styles.gharana_list_wrap_list}>
                        {
                            data?.you_have_been_waiting_for?.map((val, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {
                                            val?.you_have_been_waiting_for?.map((item, rowIndex) => {
                                                return (
                                                    <div className={styles.list_item} key={rowIndex}>
                                                        <MusicIcon />
                                                        <p>{item?.title}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className={styles.gharana_list_wrap_image}>
                        <img src='/images/footer.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GharanaList