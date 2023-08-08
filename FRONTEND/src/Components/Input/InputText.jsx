import React, { useRef, useState } from 'react'
// 
function InputText({ placeHolder, value, type, onChange, className }) {
    const [active, setActive] = useState(value ? true : false)
    const inputRef = useRef()




    return (
        <div onClickCapture={() => {
            inputRef.current.focus()
        }} className={`${className && className} w-full bg-slate-50 flex relative  rounded-xl`}>
            <input value={value} onChange={(e) => onChange(e.target.value)} ref={inputRef} onBlur={() => setActive(p => value !== "" ? true : !p)} onFocus={() => setActive(p => value !== "" ? true : !p)} type={`${type ? type : 'text'}`} className={`outline-header px-6 rounded-xl border-[1px] w-full h-full`} />
            <label className={` ${active ? 'text-xs top-0 text-button  font-bold ' : ' top-2/4 text-md '} left-5  transition-all cursor-text  -translate-y-2/4  w-fit  absolute  bg-white px-1`}>{placeHolder}</label>
        </div>
    )
}

export default InputText