import React from 'react'
import { getHomePageData } from './utils/ServerCalls'
import Showcase from './components/home/showcase'
import HowItWorks from './components/home/howItWorks'
import Legends from './components/home/legends'
import JoinOurGharana from './components/home/joinOurGharana'
import Offerings from './components/home/offerings'
import GharanaList from './components/home/gharanaList'
import OurGurus from './components/home/ourGurus'
import Reviews from './components/home/reviews'
import CareerBlock from './components/home/career'

const Home = async () => {

	const PageData = await getHomePageData()

	return (
		<>
			<Showcase data={PageData} />
			<HowItWorks data={PageData} />
			<Legends data={PageData} />
			<JoinOurGharana data={PageData} />
			<Offerings data={PageData} />
			<GharanaList data={PageData} />
			<OurGurus data={PageData} />
			<Reviews data={PageData} />
			<CareerBlock data={PageData} />
		</>
	)
}

export default Home