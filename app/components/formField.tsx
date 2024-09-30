import React from 'react'

export default function FormField({
    maxLeght, value, onChangeInput, type, placeholder, className,checked
}:
    {
        maxLeght?       : number,
        value?          : string,
        onChangeInput   : (e: React.ChangeEvent<HTMLInputElement>) => void,
        type            : string,
        placeholder?    : string,
        className       : string
        checked?        :boolean
    }) {

    return (
        <>
            <input
                checked={checked}
                value={value}
                onChange={onChangeInput}
                maxLength={maxLeght}
                type={type}
                placeholder={placeholder}
                className={className}
            />

        </>
    )
}
