import Link from "next/link";
import CheckDelivery from "@/components/CheckDelivery";
import Operation from "@/tools/models/OperationModel";
import User from "@/tools/models/UserModel";
import { CARRIER } from "@/tools/constants";



export default async function Home() {
  const operations = await Operation.get() as OperationType[]
  const users = await User.get() as UserType[]

  const getName = (dni:string) => {
    const user = users.find( (user) => user.dni === dni )
    return user ? user.fullname : '-'
  }

  const getPhone = (dni:string) => {
    const user = users.find( (user) => user.dni === dni )
    return user ? user.phone : '-'
  }

  const getCarrier = (carrier:string, label:string) => {
    if( Number(carrier)===CARRIER.ZOOM ) return "Zoom"
    if( Number(carrier)===CARRIER.TEALCA ) return "Tealca"
    if( Number(carrier)===CARRIER.MRW ) return "MRW"
    if( Number(carrier)===CARRIER.DOMESA ) return "Domesa"
    if( Number(carrier)===CARRIER.LIBERTY_EXPRESS ) return "Liberty Express"
    return label
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-24 px-2">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 rounded-lg overflow-hidden text-sm">
          <div className="flex flex-col overflow-x-auto bg-slate-100 shadow-lg">
            <div className="">
              <div className="inline-block min-w-full">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 bg-orange-400">
                      <tr>
                        <th scope="col" className="px-6 py-4">Nombre</th>
                        <th scope="col" className="px-6 py-4">Teléfono</th>
                        <th scope="col" className="px-6 py-4">Referencia</th>
                        <th scope="col" className="px-6 py-4">Monto</th>
                        <th scope="col" className="px-6 py-4">Agencia</th>
                        <th scope="col" className="px-6 py-4">Ubicación</th>
                        <th scope="col" className="px-6 py-4">Enviado?</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {operations.map( (operation) => <tr key={operation.id} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">{ getName(operation.dni) }</td>
                        <td className="whitespace-nowrap px-6 py-4">{ getPhone(operation.dni) }</td>
                        <td className="whitespace-nowrap px-6 py-4">{ operation.reference }</td>
                        <td className="whitespace-nowrap px-6 py-4">{ operation.mount }</td>
                        <td className="whitespace-nowrap px-6 py-4">{ getCarrier(operation.carrier as string, operation.carrierName as string) }</td>
                        <td className="whitespace-nowrap px-6 py-4">{ operation.address }</td>
                        <td  className="whitespace-nowrap px-6 py-4"><CheckDelivery id={operation.id} delivery={operation.delivery} /></td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Link href="./" className="bg-white hover:bg-orange-200 px-6 py-2 shadow-lg border-2 rounded-lg w-fit">Atras</Link>  
        </div>
    </main>
  );
}