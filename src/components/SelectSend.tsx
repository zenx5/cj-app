
export default function SelectSend ( ) {
    return(
        <fieldset className="bg-white p-6 border-t-8 border-orange-400 rounded-lg shadow-lg flex flex-col gap-8">
            <label htmlFor="">Agencia de envío (Elige tu preferida o la que te quede más cerca)</label>
            <div className="flex flex-col gap-y-3">
                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-1"/>
                    <label htmlFor="hs-radio-vertical-group-1" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">ZOOM</label>
                </div>

                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-2"/>
                    <label htmlFor="hs-radio-vertical-group-2" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">TEALCA</label>
                </div>

                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-3"/>
                    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">MRW</label>
                </div>
                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-3"/>
                    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Domesa</label>
                </div>
                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-3"/>
                    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Liberty Express</label>
                </div>
                <div className="flex">
                    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-orange-500 dark:checked:border-orange-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-3"/>
                    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2 mr-4  dark:text-neutral-400">Otros:</label>
                    <input type="text" placeholder="Tu respuesta" className="w-full outline-none border-b-[1px] border-gray-300"/>
                </div>
            </div>
        </fieldset>
    )
}