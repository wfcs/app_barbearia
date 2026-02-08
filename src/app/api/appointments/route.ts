import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    const session = await auth()
    if (!session?.user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    // List appointments for user
    const appointments = await prisma.appointment.findMany({
        where: {
            OR: [
                { clientId: session.user.id },
                { barberId: session.user.id }
            ]
        },
        include: {
            service: true,
            tenant: true,
            barber: true,
            client: true
        }
    })

    return NextResponse.json(appointments)
}

export async function POST(req: Request) {
    const session = await auth()
    if (!session?.user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { date, serviceId, barberId, tenantId } = body

    try {
        const appointment = await prisma.appointment.create({
            data: {
                date: new Date(date),
                clientId: session.user.id!,
                serviceId,
                barberId,
                tenantId,
                status: "PENDING"
            }
        })
        return NextResponse.json(appointment)
    } catch (error) {
        return new NextResponse("Error creating appointment", { status: 500 })
    }
}
