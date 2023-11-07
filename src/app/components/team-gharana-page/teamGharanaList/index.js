"use client";
import React, { useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import TeamGharanaItem from '../teamGharanaItem'
import NotFound from '../../common/notfound'
import styles from './teamGharanaList.module.scss'

const TeamGharanaList = ({
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
			<div className={styles.team_gharana}>
                <div className="contain">
					<div className={styles.team_gharana_wrap}>
						<div className={styles.title_area}>
							<h1 className={styles.title}>Our Team Members</h1>
							<p className={styles.text}>
								Gharana gurus are highly professional and offer classes full of
								joy and learning
							</p>
						</div>
						<div className={styles.team_gharana_wrap_inner}>
							{
								items?.length ?
								items.map((val, index) => {
									return <TeamGharanaItem {...{ val, index }} key={index} />
								}) : <NotFound />
							}
						</div>
					</div>
                </div>
            </div>
		</InfiniteScroll>
    )
}

export default TeamGharanaList