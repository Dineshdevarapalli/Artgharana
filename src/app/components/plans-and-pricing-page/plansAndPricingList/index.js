"use client";
import React, { useState, useRef } from 'react'
import PlansAndPricingItem from '../plansAndPricingItem';
import styles from './plansAndPricingList.module.scss'
import NotFound from '../../common/notfound';

const PlansAndPricingList = ({
    data
}) => {

    const getUserCountry = () => {
        const options = { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }
        switch (options.timeZone) {
            case 'Australia/Sydney':
            case 'Australia/Melbourne':
            case 'Australia/Brisbane':
                return 'Australia';
            case 'Pacific/Auckland':
                return 'New Zealand';
            case 'America/Toronto':
            case 'America/Vancouver':
                return 'Canada';
            case 'Asia/Kolkata':
            case 'Asia/Calcutta':
                return 'India';
            default:
                return 'USA';
        }
    }

    const Packages = data.data[0].attributes?.card?.filter(card => card.country == "USA")
    // getUserCountry()

    return (
        <div className={styles.plans}>
            <div className="contain">
                <div className={styles.plans_wrap}>
                    <div className={styles.title_area}>
                        <h1 className={styles.title}>Choose Your <span >Pricing Plan</span></h1>
                        <p className={styles.text}>
                            {data.data[0].attributes?.heading}
                        </p>
                    </div>
                    <div className={styles.plans_wrap_inner}>
                        {
                            Packages?.length ?
                            Packages.map((val, index) => {
                                return <PlansAndPricingItem {...{ val }} key={index} />
                            }) : <NotFound />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlansAndPricingList