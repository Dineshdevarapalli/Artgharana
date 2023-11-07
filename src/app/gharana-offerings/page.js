import React from 'react'
import { getGharanaOfferingsPageData, getGharanaOfferingsPageSeoData } from '../utils/ServerCalls'
import GharanaOfferingsList from '../components/gharana-offerings-page/gharanaOfferingsList'

const GharanaOfferings = async () => {

    const [PageData, Seo] = await Promise.all([getGharanaOfferingsPageData(1, 'Instruments'), getGharanaOfferingsPageSeoData()])

    return (
        <>
            <GharanaOfferingsList
                data={PageData}
                getData={getGharanaOfferingsPageData}
            />
        </>
    )
}

export default GharanaOfferings