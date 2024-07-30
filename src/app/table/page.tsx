import Fieldset from "@/components/Fieldset";
import Header from "@/components/Header";
import SelectSend from "@/components/SelectSend";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-24 px-2">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 rounded-lg overflow-hidden text-sm">          
          <div className="flex flex-col overflow-x-auto bg-slate-100 shadow-lg">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 bg-orange-400">
                      <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">Nombre</th>
                        <th scope="col" className="px-6 py-4">Cedula</th>
                        <th scope="col" className="px-6 py-4">Teléfono</th>
                        <th scope="col" className="px-6 py-4">Monto</th>
                        <th scope="col" className="px-6 py-4">Referencia</th>
                        <th scope="col" className="px-6 py-4">Agencia</th>
                        <th scope="col" className="px-6 py-4">Ubicación</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4 ">Cell</td>                        
                      </tr>
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