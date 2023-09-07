import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../Contexts/CryptoContext";
import { Coins } from "../types/types";

const useBannerCoins = () => {
    const {currency} = CryptoState()
    const [bannerCoins, setBannerCoins] = useState<Coins[]|null>(null);
    const fetchBannerCoins = async() => {
        try {
            const {data} = await axios.get(TrendingCoins(currency))
            setBannerCoins(data)
        } catch (error) {
            if (error instanceof Error)
            console.log(error?.message)
        }
        
    }
    useEffect(()=>{
        fetchBannerCoins();
    },[])
    return {bannerCoins}

}

export default useBannerCoins;