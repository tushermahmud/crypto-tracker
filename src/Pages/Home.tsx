import React from 'react'
import Flex from '../Components/Layouts/Flex';
import Banner from '../Components/Organisms/Banner';
import CoinList from '../Components/Organisms/CoinList';

const Home = () => {
    return(
        <Flex className='w-full flex-col'>
            <Banner/>
            <CoinList/>
        </Flex>
    )
}

export default Home;