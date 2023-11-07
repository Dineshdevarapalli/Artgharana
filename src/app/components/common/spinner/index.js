import React from 'react'
import styles from './spinner.module.scss'

const Spinner = () => {

    return (
        <div className={styles.spinner}>
            <div className={styles.spin} />
        </div>
    )
}

export default Spinner