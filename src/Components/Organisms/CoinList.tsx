import { ChangeEvent } from "react";
import Input from "../Atoms/Input"
import Flex from "../Layouts/Flex";


const CoinList = () => {
    let debounceTimer: NodeJS.Timeout | string | number | undefined;
    const handleChange = (value: string | number) => {
        const newSearchTerm = value;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            console.log(value)
        }, 1300); 
    }
    return (
        <Flex className="py-5 max-w-7xl md:w-full m-auto">
            <Input classname="block text-white w-full bg-transparent text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" onchange={handleChange} placeholder={"Search with coin name"}/>
        </Flex>
    )
}

export default CoinList;