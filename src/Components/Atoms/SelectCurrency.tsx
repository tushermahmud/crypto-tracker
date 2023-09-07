import React from "react";

type Props = {
    value?: string;
    options: any[] | [];
    onChange: (value: string) => void;
    classname?: string;
}

const SelectCurrency = ({options, onChange, classname, value}:Props) => {
    const handleChange = (inputValue: string) => {
        onChange(inputValue);
    }
    return (
        <select className={`${classname}`} onChange={(e)=>handleChange(e.target.value)} value={value}>
            {options.map((data) => (
                <option value={data.value} key={data.value}>
                    {data.value}
                </option>
      ))}
        </select>
    )
}

export default SelectCurrency;