import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET() {
    const tenants = await prisma.tenant.findMany()
    return NextResponse.json(tenants)
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { name, slug, address, phone } = body

    if (!name || !slug) {
        return new NextResponse("Missing required fields", { status: 400 })
    }

    try {
        const tenant = await prisma.tenant.create({
            data: {
                name,
                slug,
                address,
                phone,
            }
        })
        return NextResponse.json(tenant)
    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
