import React from 'react'
import NotFoundImage from '../../../../../public/images/notfound.svg'
import styles from './notfound.module.scss'

const NotFound = () => {
    return (
        <div className={styles.container_box}>
            <p className={styles.text}>Data not Found</p>
            <NotFoundImage />
        </div>
    )
}

export default NotFound
