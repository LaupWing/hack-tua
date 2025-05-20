import { NextResponse } from "next/server"
import Stripe from "stripe"
import sgMail from "@sendgrid/mail"
import { ServerClient } from "postmark"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY!)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-04-30.basil",
})

export async function POST(req: Request) {
    const buf = await req.text()
    const sig = req.headers.get("stripe-signature")!

    let event: Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(
            buf,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Webhook signature verification failed" },
            { status: 400 }
        )
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session
        const customerEmail = session.customer_details?.email

        const lineItems = await stripe.checkout.sessions.listLineItems(
            session.id
        )
        await Promise.all(
            lineItems.data.map(async (item) => {
                if (customerEmail) {
                    const priceId = item?.price?.id

                    if (
                        priceId ===
                            process.env.STRIPE_PREMIUM_WEEKLY_PRICE_ID ||
                        priceId ===
                            process.env.STRIPE_PREMIUM_ONE_TIME_PRICE_ID ||
                        priceId === process.env.STRIPE_LITE_ONE_TIME_PRICE_ID
                    ) {
                        console.log("Sending email")
                        try {
                            console.log(customerEmail)
                            sgMail
                                .send({
                                    from: process.env.EMAIL_FROM!,
                                    to: customerEmail,
                                    subject:
                                        "Welcome to Your Coaching Program! 🎉",
                                    html: email,
                                })
                                .then(() => {
                                    console.log("Email sent by SendGrid")
                                })
                                .catch((error) => {
                                    console.error(
                                        "Error sending email with SendGrid:",
                                        error
                                    )
                                })
                            console.log("Email sent by SendGrid")
                            await postmarkClient.sendEmail({
                                From: process.env.EMAIL_FROM!,
                                To: customerEmail,
                                Subject: "Welcome to Your Coaching Program! 🎉",
                                HtmlBody: email,
                                MessageStream: "outbound",
                            })
                            console.log("Email sent by Postmark")
                            await postmarkClient.sendEmail({
                                From: process.env.EMAIL_FROM!,
                                To: "laupwing@gmail.com",
                                Subject: item.description!,
                                TextBody: `New coaching order from ${customerEmail}`,
                                MessageStream: "outbound",
                            })

                            console.log("All emails sent successfully")
                        } catch (err) {
                            // @ts-ignore
                            console.log(err)
                            return NextResponse.json(
                                { error: "Error sending email" },
                                { status: 500 }
                            )
                        }
                    }
                }
            })
        )
        console.log("All emails sent successfully")
    }

    return NextResponse.json({ received: true })
}

const email = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome Email</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
            }
            h1 {
                color: #4caf50;
                text-align: center;
            }
            p {
                margin: 10px 0;
            }
            .steps {
                margin: 20px 0;
            }
            .step {
                margin-bottom: 20px;
            }
            .step h3 {
                color: #4caf50;
                margin-bottom: 10px;
            }
            a {
                color: #4caf50;
                text-decoration: none;
            }
            .button {
                display: inline-block;
                background: #4caf50;
                color: #fff;
                padding: 10px 15px;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
            }
            .footer {
                margin-top: 30px;
                text-align: center;
                font-size: 12px;
                color: #aaa;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Your Coaching Program! 🎉</h1>
            <p>Hi <strong>Friend!</strong>,</p>
            <p>
                Thank you for joining my coaching program! I’m excited to work
                with you and help you achieve your fitness goals. This is the
                first step toward transforming your body and life, and I’m here
                to guide you every step of the way.
            </p>

            <div class="steps">
                <div class="step">
                    <h3>1. Tell Me About Your Goals</h3>
                    <p>
                        To create a personalized plan for you, I need to learn
                        more about your current fitness level, goals, and
                        preferences. Please take a few minutes to complete this
                        form:
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScr9DvEpmKToRxyrAZT8nN9ltC7ZjdzBG_RGfoN4Gb5Ohr3Ww/viewform?usp=sf_link"
                            class="button"
                            >Complete Your Fitness Goals Form</a
                        >
                    </p>
                </div>
                <div class="step">
                    <h3>2. Check Your Inbox for a Calendly Link</h3>
                    <p>
                        Within the next 12 hours, I’ll set up a Calendly link
                        and send you instructions for scheduling your first
                        session. (The 12-hour window is because sleep is
                        essential for muscle recovery—don’t worry, I’ve got you.
                        😉)
                    </p>
                </div>
                <div class="step">
                    <h3>3. Prepare for Success</h3>
                    <p>Take a moment to visualize your journey:</p>
                    <ul>
                        <li>
                            Imagine yourself waking up every morning feeling
                            stronger, more energized, and confident in your
                            skin.
                        </li>
                        <li>
                            Picture crushing your workouts, seeing progress in
                            the mirror, and achieving the goals you’ve always
                            dreamed of.
                        </li>
                        <li>
                            Feel the pride of knowing that every step you take
                            is bringing you closer to your best self.
                        </li>
                    </ul>
                    <p>
                        Get ready to commit, stay consistent, and make the
                        transformation you deserve.
                    </p>
                </div>
            </div>

            <p>
                If you have any questions or need help, feel free to reply to
                this email at
                <a href="mailto:laupwing@gmail.com">laupwing@gmail.com</a> or
                contact me directly via WhatsApp or Telegram at
                <strong>+31 6 54754116</strong>.
            </p>
            <p>
                Thank you for trusting me with your fitness journey. Let’s crush
                your goals together! 🚀
            </p>

            <p>
                To your success,<br /><strong>Coach Loc</strong><br />Helping
                you achieve sustainable fitness—without the guesswork.
            </p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Coach Loc Fitness. All rights reserved.</p>
        </div>
    </body>
</html>

`
