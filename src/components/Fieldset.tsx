type Props={
    text: string
    name: string
}

export default function Fieldset ( props:Props ) {
    return(
        <fieldset className="bg-white p-6 border-t-8 border-orange-400 rounded-lg shadow-lg flex flex-col gap-8">
          <label htmlFor="">{props.text}</label>
          <input type="text" required placeholder="Tu respuesta" className="w-full outline-none border-b-[1px] border-gray-300" name={props.name}/>
        </fieldset>
    )
}