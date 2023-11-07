"use client";
import React, { useState, useRef, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import toast from 'react-hot-toast'
import { Api } from '@/app/utils/Api';
import BlogItem from '../blogItem'
import NotFound from '../../common/notfound'
import CustomInput from '../../formUtilities/customInput'
import FormFields from '../../../models/formfields.json'
import AngleIcon from '../../../../../public/icons/angle-small-down.svg'
import styles from './blogList.module.scss'

const BlogList = ({
    data,
    getData
}) => {

    const fetching = useRef(false)
    const scrollRef = useRef()
    const buttonRef = useRef()
    const [pages, setPages] = useState(data.data)

    const tabs = ["All Posts", "Dance", "Kathak", "Indian Classical Dance", "Music", "Indian Classical Music", "Indian Music", "Hindustani Music", "Carnatic Music", "Music School", "Seniors", "Hobbies", "Old Age", "Music Instruments", "Musical Instruments", "Types of Saxophone", "Saxophone classes", "Learn Saxophone Online", "Senior Citizen"]
    const [SelectTab, SetSelectTab] = useState("All Posts")
    const [FirstRender, SetFirstRender] = useState(true)
    const [HasMore, SetHasMore] = useState(false)
    const [ShowMenu, SetShowMenu] = useState(false)

    const { setValue, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

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

    useEffect(() => {
        document.addEventListener('click', handleClikOutSide, true);
        return () => {
            document.removeEventListener('click', handleClikOutSide, true);
        }
    }, [])

    const handleClikOutSide = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            SetShowMenu(false)
        }
    }

    const onSubmit = async (data) => {
        let formdata = new FormData();
        Object.keys(data).map((n) => formdata.append(n, data[n] || ''));
        const response = await fetch(Api.baseurl('api/subscribe'), {
            method: 'POST',
            body: formdata
        })
        const result = await response.json()
        if(result) {
            toast.success(result.msg)
            setValue('email', '')
        }
    }

    return (
        <InfiniteScroll
            ref={scrollRef}
            hasMore={false}
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
            <div className={styles.blog}>
                <div className="contain">
                    <div className={styles.blog_wrap}>
                        <div className={styles.title_area}>
                            <h1 className={styles.title}>The Gharana <span>Blog</span></h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <CustomInput
                                    {...{
                                        name: 'email',
                                        parent: 'subscribe',
                                        styles,
                                        control,
                                        type: 'email',
                                        label: false
                                    }}
                                />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                        <div className={styles.tabs}>
                            <ul className={styles.tabs_wrap}>
                                {
                                    tabs.map((item, index) => {
                                        if(index < 7) {
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
                                        }
                                    })
                                }
                                {
                                    tabs.map((item, index) => {
                                        if(index > 6) {
                                            return (
                                                <li key={index} className={styles.only_mobile}>
                                                    <button 
                                                        onClick={() => SetSelectTab(item)}
                                                        className={SelectTab === item ? styles.active : null}
                                                    >
                                                        {item}
                                                    </button>
                                                </li>
                                            )
                                        }
                                    })
                                }
                                <li ref={buttonRef} className={styles.more}>
                                    <button onClick={() => SetShowMenu(!ShowMenu)}>
                                        More
                                        <AngleIcon />
                                    </button>
                                    {
                                        ShowMenu ?
                                        <ul>
                                            {
                                                tabs.map((item, index) => {
                                                    if(index > 6) {
                                                        return (
                                                            <li key={index}>
                                                                <button 
                                                                    onClick={() => {
                                                                        SetSelectTab(item)
                                                                        SetShowMenu(false)
                                                                    }}
                                                                    className={SelectTab === item ? styles.active : null}
                                                                >
                                                                    {item}
                                                                </button>
                                                            </li>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul> : null
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className={styles.blog_wrap_inner}>
                            {
                                items?.length ?
                                items.map((val, index) => {
									return <BlogItem {...{ val, index }} key={index} />
								}) : <NotFound />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default BlogList

const schema = yup.object().shape({
    email:
        yup.string()
            .email(FormFields.subscribe.email.errors.valid)
            .required(FormFields.subscribe.email.errors.required)
})