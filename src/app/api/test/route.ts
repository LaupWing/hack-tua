import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        return NextResponse.json({ received: true })
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        )
    }
}
