type Props={
    text: string
}

export default function PagoMovil ( props:Props ) {
    return(
        <div className="bg-slate-200 p-6 border-t-8 border-orange-400 rounded-lg shadow-lg flex flex-col gap-8">
            <p>{props.text}</p>
            <table>
                <thead className="font-bold underline italic">
                    <tr>
                        <th>Págo Móvil</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    <tr>
                        <td className="font-semibold">Nombre:</td>
                        <td>Carlos Martínez</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Télefono:</td>
                        <td>0412 167 3162</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Cédula:</td>
                        <td>28628658</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Banco:</td>
                        <td>Banesco</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}