import { NextRequest, NextResponse } from 'next/server'
import Operation from '@/tools/models/OperationModel'
import { CARRIER, NOT_REFERENCE } from '@/tools/constants'

export async function POST(request: NextRequest) {

    const form = await request.formData()
    const reference = form.get('reference') as string
    const carrier = Number( form.get('carrier') as string )
    const address = form.get('address') as string
    const carrierName = carrier===CARRIER.OTHERS ? form.get('carrierName') as string : ''

    try {
        const [operation] = await Operation.search('reference', reference)
        if (!operation) throw new Error(NOT_REFERENCE)
        await Operation.put(operation.id, { reference, carrier, address, carrierName })
        const url = new URL(`/?message=success`, request.url)
        return NextResponse.redirect(url, { status: 303 })
    } catch (e: any) {
        const url = new URL(`/?error=${e.message}`, request.url)
        return NextResponse.redirect(url, { status: 303 })
    }

}