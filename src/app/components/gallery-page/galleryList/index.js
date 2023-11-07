"use client";
import React, { useState, useRef } from 'react'
import InfiniteScroll from "react-infinite-scroller"
import GalleryItem from '../galleryItem'
import NotFound from '../../common/notfound'
import styles from './galleryList.module.scss'

const GalleryList = ({
    data,
    getData
}) => {

    const fetching = useRef(false)
    const [pages, setPages] = useState(data.data)
    const items = pages.flatMap((page) => page)
  
    const loadMore = async (page) => {
        if (!fetching.current) {
            try {
                fetching.current = true;
                const data = await getData(page + 1);
                setPages((prev) => [...prev, data.data]);
            } finally {
                fetching.current = false;
            }
        }
    }

    return (
        <InfiniteScroll
            hasMore={!(data?.meta?.pagination?.total == items.length)}
            pageStart={0}
            loadMore={loadMore}
            loader={
                <span key={0} className="loader">
                    Loading ...
                </span>
            }
            element="main"
        >
            <div className={styles.gallery}>
                <div className='contain'>
                    <div className={styles.gallery_wrap}>
                        <p className={styles.title}>Gharana <span>Gallery!</span></p>
                        <div className={styles.gallery_wrap_inner}>
                            {
                                items?.length ?
                                items.map((val) => {
                                    return <GalleryItem {...{ val }} key={val.id}/>
                                }) : <NotFound />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default GalleryList