type Props={
    text: string
    description: string
}

export default function Header ( props:Props ) {
    return(
        <fieldset className="bg-white border-t-8 border-orange-400 rounded-lg shadow-lg flex flex-col gap-2 pb-4">
          <label htmlFor="" className="bg-orange-400 px-6 py-2 font-semibold">{props.text}</label>
          <p className="px-6">{props.description}</p>
        </fieldset>
    )
}