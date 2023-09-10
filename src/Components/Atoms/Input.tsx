import React from "react"

type Props = {
    classname?: string;
    onchange?: (value: string | number) => void;
    placeholder?: string;
}
const Input = ({classname, onchange, placeholder}: Props) => {
    return (
        <input className={`${classname}`} id="grid-last-name" type="text" onChange={(e)=>onchange && onchange(e.target.value)} placeholder={placeholder}/>
    )
}

export default Input;