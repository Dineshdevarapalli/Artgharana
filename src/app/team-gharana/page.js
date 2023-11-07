import React from 'react'
import { getTeamGharanaPageData, getTeamGharanaPageSeoData } from '../utils/ServerCalls'
import TeamGharanaList from '../components/team-gharana-page/teamGharanaList'

const TeamGharana = async () => {

    const [PageData, Seo] = await Promise.all([getTeamGharanaPageData(1), getTeamGharanaPageSeoData()])

    return (
        <>
            <TeamGharanaList
                data={PageData}
                getData={getTeamGharanaPageData}
            />
        </>
    )
}

export default TeamGharana