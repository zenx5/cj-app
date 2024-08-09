import { CARRIER } from "@/tools/constants"

export default function SelectSend ( ) {
    const name = "carrier"
    const carriers = [
        {name: "ZOOM", value: CARRIER.ZOOM},
        {name: "TEALCA", value: CARRIER.TEALCA},
        {name: "MRW", value: CARRIER.MRW},
        {name: "Domesa", value: CARRIER.DOMESA},
        {name: "Liberty Express", value: CARRIER.LIBERTY_EXPRESS},
        {name: "Otros", value: CARRIER.OTHERS }
    ]

    return(
        <fieldset className="bg-white p-6 border-t-8 border-orange-400 rounded-lg shadow-lg flex flex-col gap-8">
            <label htmlFor="">Agencia de envío (Elige tu preferida o la que te quede más cerca)</label>
            <div className="flex flex-col gap-y-3">
                {
                    carriers.map( carrier => (
                        <div key={carrier.value} className="flex flex-row gap-1 items-center">
                            <input
                                type="radio"
                                name={name}
                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800"
                                id={`${name}-${carrier.value}`}
                                value={carrier.value}/>
                            <label
                                htmlFor={`${name}-${carrier.value}`}
                                className="text-sm text-gray-500 ms-2 dark:text-neutral-400">{carrier.name}</label>
                            { carrier.value===CARRIER.OTHERS && <input type="text" placeholder="Tu respuesta" className="w-full outline-none border-b-[1px] border-gray-300"/>}
                        </div>
                    ))
                }
            </div>
        </fieldset>
    )
}