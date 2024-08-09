import { NextRequest, NextResponse } from "next/server";
import User from "@/tools/models/UserModel";
import Operation from "@/tools/models/OperationModel";

export async function POST(request: NextRequest, res: NextResponse) {
    const form = await request.formData();
    const fullname = form.get("fullname") as string
    const dni = form.get("dni") as string
    const phone = form.get("phone") as string
    const mount = form.get("mount") as string
    const reference = form.get("reference") as string
    try{
        const [ user ] = await User.search("dni", dni)
        if (!user) await User.post({ fullname, dni, phone })
        const [ operation ] = await Operation.search("reference", reference)
        if (operation) throw new Error("La referencia ya ha sido registrada")
        await Operation.post({ mount, reference, dni })
        const url = new URL(`/shipment?reference=${reference}`, request.url)
        return NextResponse.redirect(url, { status: 303 })
    }catch(e:any){
        const url = new URL(`/?error=${e.message}`, request.url)
        return NextResponse.redirect(url, { status: 303 })
    }
}