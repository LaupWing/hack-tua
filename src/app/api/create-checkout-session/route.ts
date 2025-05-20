import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-04-30.basil",
})

export async function POST(request: NextRequest) {
    try {
        let { type } = await request.json()
        type = type.trim()
        const liteOneTimeOption: Stripe.Checkout.SessionCreateParams = {
            line_items: [
                {
                    price: process.env.STRIPE_LITE_ONE_TIME_PRICE_ID,
                    quantity: 1,
                },
            ],
            payment_method_types: ["card", "paypal"],
            mode: "payment",
        }
        const premiumOneTimeOption: any = {
            line_items: [
                {
                    price: process.env.STRIPE_PREMIUM_ONE_TIME_PRICE_ID,
                    quantity: 1,
                },
            ],
            payment_method_types: ["card", "paypal"],
            mode: "payment",
        }
        const premiumWeeklyOption: any = {
            line_items: [
                {
                    price: process.env.STRIPE_PREMIUM_WEEKLY_PRICE_ID,
                    quantity: 1,
                },
            ],
            payment_method_types: ["card"],
            mode: "subscription",
        }

        const price =
            type === "lite-one-time"
                ? liteOneTimeOption
                : type === "premium-one-time"
                ? premiumOneTimeOption
                : premiumWeeklyOption

        const session = await stripe.checkout.sessions.create({
            ...price,
            success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
        })

        return NextResponse.json({ sessionId: session.id })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: "Error creating checkout session" },
            { status: 500 }
        )
    }
}
