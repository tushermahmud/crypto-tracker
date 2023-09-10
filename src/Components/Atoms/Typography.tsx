import React from "react";

type Props = {
    className: string;
    text: string | number;
}

const Typography = ({className, text}:Props) => {
    return (
        <span className={`${className}`}>{text}</span>
    )
}

export default Typography;