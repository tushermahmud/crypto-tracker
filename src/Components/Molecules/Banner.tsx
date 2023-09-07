import React from "react";
import Flex from "../../Layouts/Flex";
import "../../App.css"
import Typography from "../Atoms/Typography";
import Carousel from "./Carousel";
const Banner = () => {
    return (
        <Flex className="px-3 bg-blue w-full banner py-5">
            <Flex className="max-w-7xl md:w-full m-auto items-center justify-center flex-col gap-2">
                <Flex className="w-full">
                    <Typography text="Crypto Tracker" className="text-5xl font-bold text-white text-center block m-auto"/>
                </Flex>
                <Flex className="w-full">
                    <Typography text="Get All The Info Regarding Your Favorite Crypto Currency" className="text-base font-normal text-gray text-center block m-auto"/>
                </Flex>
                <Flex className="my-10">
                    <Carousel/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Banner;