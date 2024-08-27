import React from 'react'
import { Button } from "@/components/ui/button"


const ButtonDemo = ({ text }: any | string) => {
    return (
        <div><Button  variant="outline">{text}</Button>
        </div>
    )
}

export default ButtonDemo