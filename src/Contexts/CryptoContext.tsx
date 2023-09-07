import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

type PropsProvider = {
    children: ReactNode;
}

type ContextType = {
    currency?: string;
    setCurrency?: (currency: string) => void;
    symbol?: string;
}

const Crypto = createContext<ContextType>({});

const CryptoContext = ({children}:PropsProvider) => {
    const [currency, setCurrency] = useState<string>("BDT");
    const [symbol, setSymbol] = useState<string>("৳");

    useEffect(()=>{
        if(currency === "BDT") setSymbol("৳");
        else if(currency === "USD") setSymbol("$")
    },[currency]);
    return (
        <Crypto.Provider value={{currency, symbol, setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext;


export const CryptoState = () => {
    return useContext(Crypto);
}