import React from "react";
import Flex from "./Flex";
import Logo from "../Assets/logo/Logo.png";
import Image from "../Components/Atoms/Image";
import SelectCurrency from "../Components/Atoms/SelectCurrency";
import Button from "../Components/Atoms/Button";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../Contexts/CryptoContext";

const Header = () => {
    const navigate = useNavigate();
    const options = [
        {
            value: "BDT",
        },
        {
            value: "USD"
        }
    ];
    const {currency, setCurrency, symbol} = CryptoState();
    const handleChange = (value:string) => {
        if(setCurrency) setCurrency(value);
    }
    const handleClick = () => {

    }
    return (
        <Flex className="w-full shadow-md shadow-white px-3">
            <Flex className="max-w-7xl md:w-full m-auto h-20 items-center justify-between">
                <Flex className="flex-col">
                    <Image src={Logo} className="w-40 h-20 cursor-pointer" onclick={()=>navigate('/')}/>
                </Flex>
                <Flex className="gap-3">
                    <SelectCurrency value={currency} onChange={handleChange} options={options} classname="bg-transparent border border-white outline-none text-gray-900 text-white text-sm rounded-md focus:border-white focus:border-transparent block w-full p-2.5"/>
                    <Button label="Login" onclick={handleClick} classname="bg-secondary px-4 py-2 rounded-lg text-light"/>
                </Flex>
            </Flex>
        </Flex>
        
    )
}

export default Header;