import React from "react";

type Props = {
    className: string;
    children: JSX.Element[] | JSX.Element;
}

const Grid = ({className, children}:Props) => {
    return (
        <div className={`Grid ${className}`}>
            {children}
        </div>
    )
}
export default Grid;