import React, {MouseEventHandler} from "react";

type Props = {
    className?: string;
    src: string;
    onclick: () => void;
}

const Image = ({className, src, onclick}: Props) => {
    return (
        <img src={src} alt="" className={`${className}`} onClick={onclick}/>
    )
}

export default Image;