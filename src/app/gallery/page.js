import React from 'react'
import { getGalleryPageData, getGalleryPageSeoData } from '../utils/ServerCalls'
import Meta from '../components/common/meta'
import GalleryList from '../components/gallery-page/galleryList'

const Gallery = async () => {

    const [PageData, Seo] = await Promise.all([getGalleryPageData(1), getGalleryPageSeoData()])

    return (
        <>
            {/* <Meta 
                {...{
                    type: 'gallery',
                    data: Seo
                }}
            /> */}
            <GalleryList 
                data={PageData} 
                getData={getGalleryPageData}
            />
        </>
    )
}

export default Gallery