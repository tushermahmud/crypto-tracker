import React from "react";

type Props = {
    className?: string;
    children: JSX.Element[] | JSX.Element | string;
}

const Flex = ({className, children}:Props) => {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    )
}
export default Flex;