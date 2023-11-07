"use client";
import React, { useState, useRef, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Link from 'next/link'
import GharanaOfferingsItem from '../gharanaOfferingsItem'
import NotFound from '../../common/notfound'
import styles from './gharanaOfferingsList.module.scss'

const GharanaOfferingsList = ({
    data,
    getData
}) => {

    const fetching = useRef(false)
    const scrollRef = useRef()
    const [pages, setPages] = useState(data.data)

    const tabs = ['Instruments','Dance', 'Vocal', 'Chess', 'Art & Craft', 'Zumba - Fitness']
    const buttons = [
        {
            id: 1,
            btn: 'Buy a Plan',
            url: '/plans-and-pricing'
        },
        {
            id: 2,
            btn: 'Request a Demo',
            url: '/contact-us'
        }
    ]
    const [SelectTab, SetSelectTab] = useState("Instruments")
    const [FirstRender, SetFirstRender] = useState(true)
    const [HasMore, SetHasMore] = useState(false)
  
    const loadMore = async (page, selected) => {
        if (!fetching.current) {
            try {
                fetching.current = true;
                const data = await getData(page + 1, selected);
                if(data?.meta?.pagination?.page == 1) {
                    scrollRef.current.pageLoaded = 0
                    SetHasMore(!(data?.meta?.pagination?.total == data.data.length))
                    setPages(data.data)
                } else {
                    let newData = [...pages, ...data.data]
                    SetHasMore(!(data?.meta?.pagination?.total == newData.length))
                    setPages((prev) => [...prev, data.data]);
                }
            } finally {
                fetching.current = false;
            }
        }
    }

    const items = pages.flatMap((page) => page)

    useEffect(() => {
        if(FirstRender) {
            SetFirstRender(false)
            SetHasMore(!(data?.meta?.pagination?.total == items.length))
        } else {
            loadMore(0, SelectTab)
        }
    }, [SelectTab])

    return (
        <InfiniteScroll
            ref={scrollRef}
            hasMore={HasMore}
            pageStart={0}
            loadMore={(page) => {
                loadMore(page, SelectTab)
            }}
            loader={
                <span key={0} className="loader">
                    Loading ...
                </span>
            }
            element="main"
        >
            <div className={styles.offerings}>
                <div className="contain">
                    <div className={styles.offerings_wrap}>
                        <div className={styles.title_area}>
                            <p className={styles.title}>Gharana <span>Offerings</span></p>
                        </div>
                        <div className={styles.btns_area}>
                            {
                                buttons.map((item, index) => {
                                    return (
                                        <Link 
                                            href={item.url} 
                                            className={styles.btn} 
                                            key={index}
                                        >
                                            {item.btn}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.tabs}>
                            <ul className={styles.tabs_wrap}>
                                {
                                    tabs.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <button 
                                                    onClick={() => SetSelectTab(item)}
                                                    className={SelectTab === item ? styles.active : null}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={styles.offerings_wrap_inner}>
                            {
                                items?.length ?
                                items.map((val, index) => {
									return <GharanaOfferingsItem {...{ val, index }} key={index} />
								}) : <NotFound />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default GharanaOfferingsList