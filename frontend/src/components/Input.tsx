import { ChangeEvent } from "react"

interface InputType {
    label : string,
    placeholder : string,
    onChange : (e:ChangeEvent<HTMLInputElement>) => void,
    type? : string
}
export const Input = ({label,placeholder,onChange,type} : InputType) => {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white pt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
             w-xs md:w-md p-2.5 dark:bg-gray-700 " placeholder={placeholder} required />
        </div>
    </div>
}