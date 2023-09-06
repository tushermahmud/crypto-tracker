import React, {MouseEventHandler} from "react";

type Props = {
    label: string;
    classname: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({onclick, classname, label}: Props) => {
    return (
        <button onClick={onclick} className={`${classname}`}>
            {label}
        </button>
    )
}

export default Button;