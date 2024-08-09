import Fieldset from "@/components/Fieldset";
import Header from "@/components/Header";
import PagoMovil from "@/components/PagoMovil";
import Link from "next/link";

export default function Home() {
  const labelText=[
    { name:"fullname", label:"Dime tu nombre completo" },
    { name:"dni", label:"Ingrese su número de cédula, sin guiones ni puntos (Ejemplo: 28821312)" },
    { name:"phone", label:"Ingrese su número de télefono (Ejemplo: 04121439101)" },
    { name:"mount", label:"Monto cancelado (Ejemplo: 203, 121)" },
    { name:"reference", label:"Últimos 4 dígitos de la referencia del pago (Ejemplo: 9821)" }
  ]
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-24 px-2">
      <form className="max-w-2xl mx-auto flex flex-col gap-8" action="/api/order" method="POST" >
        <Header text="Formulario" description="Completa este formulario para registrar tu pago y nuestro equipo realice el envío de tu pedido."/>
        {
          labelText.map((item,index)=><Fieldset key={index} text={item.label} name={item.name}/>)
        }
        <PagoMovil text="Para realizar el pago; use el monto previamente indicado por nuestro personal y con los siguientes datos:"/>

        <fieldset className="flex justify-between text-orange-500 font-semibold text-sm">
          <button className="bg-white hover:bg-orange-50 px-6 py-2 shadow-lg border rounded-lg">Siguiente</button>
        </fieldset>
      </form>
    </main>
  );
}