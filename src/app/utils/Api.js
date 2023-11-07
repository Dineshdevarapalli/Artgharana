const qs = require('qs')

export const Constants = {
    API_PATH: "https://api-artgharana.craftnotion.com",
    APP_PATH: "https://api-artgharana.craftnotion.com"
}

export const Api = {
    baseurl: (headPoint, params) => `${Constants.API_PATH}/${headPoint}${params ? `?${qs.stringify(params)}` : ""}`,
    imageUrl: (url) => `${Constants.API_PATH}${url}`,
}