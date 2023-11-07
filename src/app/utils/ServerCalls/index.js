import { Api } from "../Api"

// Home Page

export const getHomePageData = async () => {
    "use server";
    const response = await fetch(Api.baseurl('api/home'), {
        method: 'GET'
    })
    return response.json()
}

// Home Page end here ------------------------------------->>

// Gharana Offerings Page

export const getGharanaOfferingsPageData = async (page, selectedTab) => {
    "use server";
    const response = await fetch(Api.baseurl('api/offers', {pagination:{page:page,pageSize:10},populate:{image:{fields:["url"]},video:{fields:["url"]}},filters:{home:{'$ne':true},category:{'$eqi':selectedTab}}}), {
        method: 'GET'
    })
    return response.json()
}

export const getGharanaOfferingsPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/offering-seo', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Gharana Offerings Page end here ------------------------------------->>

// Gallery Page

export const getGalleryPageData = async (page) => {
    "use server";
    const response = await fetch(Api.baseurl('api/gallaries', {pagination:{"page":page,"pageSize":10},populate:{image:{fields:["url"]},video:{fields:["url"]}}}), {
        method: 'GET'
    })
    return response.json()
}

export const getGalleryPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/gallery-seo', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Gallery Page end here ------------------------------------->>

// Team Gharana Page

export const getTeamGharanaPageData = async () => {
    "use server";
    const response = await fetch(Api.baseurl('api/teams', {populate:{image:{fields:["url"]},video:{fields:["url"]}},pagination:{page:1,pageSize:30}}), {
        method: 'GET'
    })
    return response.json()
}

export const getTeamGharanaPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/team-seo', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Team Gharana Page end here ------------------------------------->>

// Blog Page

export const getBlogPageData = async (page, selectedTab) => {
    "use server";    
    const response = await fetch(Api.baseurl('api/blogs', {
        pagination:{page:page,pageSize:10},populate:{image:{fields:["url"]},video:{fields:["url"]}},
        ...(selectedTab != 'All Posts' ? {filters:{category:{'$eqi':selectedTab}}} : {})        
    }), {
        method: 'GET'
    })
    return response.json()
}

export const getBlogPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/blog-seo', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Blog Page end here ------------------------------------->>

// Contact Us Page

export const getContactPageData = async () => {
    const response = await fetch(Api.baseurl('api/contact-page', {populate:{address:"*",image:{fields:["url"]}}}), {
        method: 'GET'
    })
    return response.json()
}

export const getContactPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/contact-page', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Contact Us Page end here ------------------------------------->>

// Plans and Pricing Page

export const getPlansAndPricingPageData = async (page) => {
    "use server";
    const response = await fetch(Api.baseurl('api/plan-pricings', {populate:"*",populate:{card:{populate:"*"}}}), {
        method: 'GET'
    })
    return response.json()
}

export const getPlansAndPricingPageSeoData = async () => {
    const response = await fetch(Api.baseurl('api/plan-pricing-seo', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Plans and Pricing Page end here ------------------------------------->>

// About Us Page

export const getAboutUsPageData = async () => {
    "use server";
    const response = await fetch(Api.baseurl('api/about-us', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// About Us Page end here ------------------------------------->>

// Privacy Policy Page

export const getPrivacyPolicyPageData = async () => {
    "use server";
    const response = await fetch(Api.baseurl('api/privacy-policy', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Privacy Policy Page end here ------------------------------------->>

// Terms and Conditions Page

export const getTermsAndConditionsPageData = async () => {
    "use server";
    const response = await fetch(Api.baseurl('api/term-condition', {populate:"*"}), {
        method: 'GET'
    })
    return response.json()
}

// Terms and Conditions Page end here ------------------------------------->>

// Footer calls

/**
 * get footer data
 * @returns 
 */
export const getFooterData = async () => {
    const response = await fetch(Api.baseurl('api/footer'), {
        method: 'GET'
    })
    return response.json()
}

export const getBestSellerData = async () => {
    const response = await fetch(Api.baseurl('api/plan-pricings', {populate:"*",populate:{card:{populate:"*"}},filters:{'card':{'best_seller':{'$eq':true}}}}), {
        method: 'GET'
    })
    return response.json()
}

// Footer calls end here ------------------------------------->>