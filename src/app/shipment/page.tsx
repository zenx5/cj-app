import Fieldset from "@/components/Fieldset";
import Header from "@/components/Header";
import SelectSend from "@/components/SelectSend";
import Operation from "@/tools/models/OperationModel";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home({ searchParams }:{ searchParams: { reference: string } }) {
  const { reference } = searchParams;
  if( !reference ) redirect("/");
  const [operation] = await Operation.search("reference", reference);
  if( !operation ) redirect("/");

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-24 px-2">
      <form className="max-w-2xl mx-auto flex flex-col gap-8" action="/api/shipment" method="post">
        <input type="hidden" name="reference" value={reference}/>
        <Header text="Datos para el envío de tu producto" description="Con esta información, nuestro equipo podrá realizar el envío de tu pedido lo más rápido posible"/>
        <SelectSend />
        <Fieldset text="¿Dónde estás ubicado? (Ejemplo: Cumaná, Sucre)" name="address"/>

        <fieldset className="flex justify-between text-orange-500 font-semibold text-sm">
          <div className="flex gap-4 items-center">
            {/* <Link href="./" className="bg-white hover:bg-orange-50 px-6 py-2 shadow-lg border rounded-lg">Atras</Link> */}
            <button className="bg-orange-500 hover:bg-orange-400 px-6 py-2 shadow-lg border rounded-lg text-white">Enviar</button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}