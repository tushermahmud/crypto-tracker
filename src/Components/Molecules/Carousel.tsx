import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useBannerCoins from '../../hooks/useBannerCoins';
import Flex from '../../Layouts/Flex';
import Image from '../Atoms/Image';
import Typography from '../Atoms/Typography';

const Carousel = () => {
    const {bannerCoins} = useBannerCoins();
    console.log(bannerCoins)

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = bannerCoins?.map((item, index)=>{
        const profit = item.price_change_percentage_24h>=0;
        return(
                <Flex className="gap-10 bg-blue" data-value={index} key={index}>
                    <Flex className='items-center justify-center flex-col'>
                        <Flex className=''>
                            <Image src={item.image} className=""/>
                        </Flex>
                        <Flex className='items-center justify-center'>
                            <Typography className='' text={item.symbol.toLocaleUpperCase()}/>
                            <Typography className={profit?'text-success':'text-error'} text={"+" + item.price_change_percentage_24h.toString()}/>
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
        autoPlayInterval={1000}
        animationDuration={1000}
        responsive={responsive}
        disableDotsControls
        controlsStrategy="alternate"
        autoPlay
    />
)}

export default Carousel;