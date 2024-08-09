"use client"
import Operation from "@/tools/models/OperationModel"
import { useEffect, useState } from "react"

export default function CheckDelivery({ id, delivery }: { id?: string, delivery?: boolean }) {
    const [ isDelivered, setIsDelivered ] = useState(false)

    useEffect(()=>{
        setIsDelivered(delivery as boolean)
    },[delivery])

    const handlerToggle = () => {
        setIsDelivered( prev => !prev )
        Operation.put(id as string, { delivery: !isDelivered })
    }

    return <button onClick={handlerToggle}>
        {isDelivered ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>}
    </button>
}