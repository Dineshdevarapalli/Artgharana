import React from 'react'
import { getPlansAndPricingPageData, getPlansAndPricingPageSeoData } from '../utils/ServerCalls'
import PlansAndPricingList from '../components/plans-and-pricing-page/plansAndPricingList'

const PlansAndPricing = async () => {

    const [PageData, Seo] = await Promise.all([getPlansAndPricingPageData(), getPlansAndPricingPageSeoData()])

    return (
        <>
            <PlansAndPricingList data={PageData}/>
        </>
    )
}

export default PlansAndPricing