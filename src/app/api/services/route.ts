import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const tenantId = searchParams.get("tenantId")

        if (!tenantId) {
            return new NextResponse("Tenant ID required", { status: 400 })
        }

        const services = await prisma.service.findMany({
            where: { tenantId }
        })
        return NextResponse.json(services)
    } catch (error) {
        console.error("Failed to fetch services:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    // TODO: Verify if user is admin of tenant

    const body = await req.json()
    const { name, price, duration, tenantId } = body

    if (!name || !price || !duration || !tenantId) {
        return new NextResponse("Missing fields", { status: 400 })
    }

    try {
        const service = await prisma.service.create({
            data: {
                name,
                price,
                duration,
                tenantId,
            }
        })
        return NextResponse.json(service)
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}
