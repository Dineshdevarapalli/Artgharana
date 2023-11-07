import React from 'react'
import { getBlogPageData, getBlogPageSeoData } from '../utils/ServerCalls'
import BlogList from '../components/blog/blogList'

const Blog = async () => {

    const [PageData, Seo] = await Promise.all([getBlogPageData(1, 'All Posts'), getBlogPageSeoData()])

    return (
        <>
            <BlogList
                data={PageData}
                getData={getBlogPageData}
            />
        </>
    )
}

export default Blog