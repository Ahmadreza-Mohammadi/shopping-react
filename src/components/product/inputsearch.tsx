import { Button, Group, Input, InputAddon, Stack } from "@chakra-ui/react"
import { IoSearch } from "react-icons/io5"

export const InputWithAddon = () => (

    <div className="border-4 border-solid border-gray-500">
        <button className="bg-green-600 text-white ">سرچ کنید</button>
        <IoSearch className="w-8 h-8"/>
        <input type="text" className="outline-none" />

    </div>

    

)
