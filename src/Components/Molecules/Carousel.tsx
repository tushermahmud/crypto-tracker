import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useBannerCoins from '../../hooks/useBannerCoins';
import Flex from '../Layouts/Flex';
import Image from '../Atoms/Image';
import Typography from '../Atoms/Typography';
import { addCommasBetweenNumbers } from '../../Helpers/Helper';

const Carousel = () => {
    const {bannerCoins, symbol} = useBannerCoins();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    const items = bannerCoins?.map((item, index)=>{
        const profit = item.price_change_percentage_24h>=0;
        return(
                <Flex className="w-full justify-center" data-value={index} key={index}>
                    <Flex className='items-center justify-center flex-col'>
                        <Flex className='item-center justify-center mb-2'>
                            <Image src={item.image} className="h-40 w-40"/>
                        </Flex>
                        <Flex className='items-center justify-center flex-col space-y-1'>
                            <Flex>
                                <Typography className={`text-white mr-2 text-base`} text={item.symbol.toLocaleUpperCase()}/>
                                <Typography className={`${profit?'text-success':'text-error'} text-base`} text={(profit?"+":"")+item.price_change_percentage_24h.toFixed(2).toString()+"%"}/>
                            </Flex>
                            <Flex>
                                {symbol ? (<Typography className={`text-white mr-1 text-xl`} text={symbol}/>):<></>}
                                <Typography className={`text-white text-xl`} text={addCommasBetweenNumbers(item.current_price)}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            );
        });
    
    return (
    <AliceCarousel
        mouseTracking
        infinite
        items={items}
        animationDuration={1000}
        responsive={responsive}
        disableDotsControls
        controlsStrategy="alternate"
        autoPlay={false}
    />
)}

export default Carousel;