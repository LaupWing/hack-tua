import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    CheckCircle,
    Twitter,
    ArrowRight,
    Star,
    Download,
    Users,
    TrendingUp,
    Zap,
} from "lucide-react"

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto  flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Hack Tuah</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium hover:text-primary"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium hover:text-primary"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#testimonials"
                            className="text-sm font-medium hover:text-primary"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium hover:text-primary"
                        >
                            FAQ
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            variant="outline"
                            className="hidden md:flex"
                        >
                            <Link href="#contact">Contact</Link>
                        </Button>
                        <Button asChild>
                            <Link href="#buy">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge
                                        className="inline-flex"
                                        variant="secondary"
                                    >
                                        <Twitter className="mr-1 h-3 w-3" />
                                        Proven Twitter Growth System
                                    </Badge>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        <span className="text-primary">
                                            27K Followers & 100M+ Impressions
                                        </span>{" "}
                                        in Just One Year
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        The exact system I used to grow my
                                        Twitter account from zero to 27,000
                                        followers with over 100 million
                                        impressions in just 12 months.
                                    </p>
                                </div>

                                {/* Dashboard Image */}
                                <div className="relative w-full max-w-[700px] rounded-lg overflow-hidden border shadow-lg my-6">
                                    <Image
                                        src="/placeholder.svg?height=400&width=700"
                                        alt="Twitter Growth Dashboard"
                                        width={700}
                                        height={400}
                                        className="w-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">
                                            My actual Twitter growth dashboard
                                            showing the journey to 27K followers
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" asChild>
                                        <Link href="#buy">
                                            Get The Hack Tuah PDF{" "}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="#learn-more">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Proven Hook Formulas</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>30-Day System</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Viral Thread Templates</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-xl border bg-gradient-to-br from-primary/20 via-muted to-background p-4 shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/80"></div>
                                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                                        <Zap className="h-16 w-16 text-primary mb-4" />
                                        <h3 className="text-2xl font-bold">
                                            Hack Tuah
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            Twitter Growth Accelerator
                                        </p>
                                        <div className="flex items-center justify-center mb-4">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-5 w-5 fill-primary text-primary"
                                                    />
                                                ))}
                                            </div>
                                            <span className="ml-2 text-sm font-medium">
                                                5.0 (250+ reviews)
                                            </span>
                                        </div>
                                        <Button
                                            size="lg"
                                            className="w-full"
                                            asChild
                                        >
                                            <Link href="#buy">
                                                <Download className="mr-2 h-4 w-4" />{" "}
                                                Get Instant Access
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
                >
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline">What's Inside</Badge>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    The Complete Twitter Growth Blueprint
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                    After a year of experimenting with Twitter
                                    growth, I've distilled everything into this
                                    comprehensive guide.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <Zap className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Proven Hook Formulas",
                                    description:
                                        "A complete catalog of high-converting hook templates that grab attention and stop the scroll.",
                                },
                                {
                                    icon: (
                                        <TrendingUp className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Viral Thread Structure",
                                    description:
                                        "The exact 3-step formula I use to create threads that consistently get thousands of likes and retweets.",
                                },
                                {
                                    icon: (
                                        <Users className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Human Psychology Tactics",
                                    description:
                                        "Learn the 4 psychological triggers that make content irresistible and shareable.",
                                },
                                {
                                    icon: (
                                        <Download className="h-10 w-10 text-primary" />
                                    ),
                                    title: "30-Day System",
                                    description:
                                        "A step-by-step plan to implement everything you learn and see real growth within a month.",
                                },
                                {
                                    icon: (
                                        <Twitter className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Algorithm Mastery",
                                    description:
                                        "Insider knowledge on how the Twitter algorithm works and how to use it to your advantage.",
                                },
                                {
                                    icon: (
                                        <CheckCircle className="h-10 w-10 text-primary" />
                                    ),
                                    title: "Growth Strategy",
                                    description:
                                        "Understand why most people fail to grow and how to avoid the common pitfalls.",
                                },
                            ].map((feature, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="flex justify-center">
                                            {feature.icon}
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="pricing"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline">Pricing</Badge>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Invest in Your Twitter Growth
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                    Choose the package that best fits your needs
                                    and start growing your Twitter presence
                                    today.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>Basic Package</CardTitle>
                                    <CardDescription>
                                        Perfect for Twitter beginners
                                    </CardDescription>
                                    <div className="mt-4 text-4xl font-bold">
                                        $27
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Hack Tuah PDF Guide",
                                            "Basic Growth Strategies",
                                            "Content Creation Templates",
                                            "30-Day Action Plan",
                                            "Email Support",
                                        ].map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" asChild>
                                        <Link href="#buy-basic">
                                            Get Started
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col border-primary">
                                <CardHeader>
                                    <Badge
                                        className="absolute right-4 top-4"
                                        variant="secondary"
                                    >
                                        Most Popular
                                    </Badge>
                                    <CardTitle>Premium Package</CardTitle>
                                    <CardDescription>
                                        For serious Twitter growth
                                    </CardDescription>
                                    <div className="mt-4 text-4xl font-bold">
                                        $47
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Everything in Basic",
                                            "Advanced Growth Strategies",
                                            "Monetization Blueprint",
                                            "60-Day Action Plan",
                                            "Tweet Analytics Guide",
                                            "Priority Email Support",
                                        ].map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" asChild>
                                        <Link href="#buy-premium">
                                            Get Premium
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>Ultimate Package</CardTitle>
                                    <CardDescription>
                                        Complete Twitter mastery
                                    </CardDescription>
                                    <div className="mt-4 text-4xl font-bold">
                                        $97
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Everything in Premium",
                                            "1-on-1 Strategy Call",
                                            "Profile Review & Optimization",
                                            "Custom Content Calendar",
                                            "Advanced Monetization Strategies",
                                            "Lifetime Updates",
                                            "VIP Support",
                                        ].map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" asChild>
                                        <Link href="#buy-ultimate">
                                            Get Ultimate
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>

                <section
                    id="testimonials"
                    className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
                >
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline">Success Stories</Badge>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    From Zero to Twitter Influence
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                    See what others have achieved with the Hack
                                    Tuah system.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: "Sarah Johnson",
                                    handle: "@sarahjgrowth",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "I grew from 500 to 10K followers in just 3 months using the hook formulas in Hack Tuah. The engagement tactics are pure gold!",
                                },
                                {
                                    name: "Michael Chen",
                                    handle: "@mikechentech",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "The thread structure section alone was worth 10x what I paid. I'm now getting 5-10x more engagement on every post.",
                                },
                                {
                                    name: "Jessica Williams",
                                    handle: "@jesswrites",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "As a content creator, Hack Tuah gave me the exact framework I needed to build authority in my niche. My engagement rate is up 300%!",
                                },
                                {
                                    name: "David Rodriguez",
                                    handle: "@davidrtech",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "I was skeptical at first, but the results speak for themselves. 5K new followers in just 60 days using the 30-day system.",
                                },
                                {
                                    name: "Emma Thompson",
                                    handle: "@emmathompson",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "The algorithm insights in Hack Tuah completely changed my Twitter strategy. My reach has exploded and I'm getting opportunities I never had before.",
                                },
                                {
                                    name: "James Wilson",
                                    handle: "@jameswilson",
                                    image: "/placeholder.svg?height=100&width=100",
                                    quote: "Worth every penny! I've tried other Twitter guides but none delivered actionable hook templates like Hack Tuah. My account is growing daily now.",
                                },
                            ].map((testimonial, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="flex justify-center">
                                            <Image
                                                src={
                                                    testimonial.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <CardTitle className="mt-2">
                                            {testimonial.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {testimonial.handle}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            "{testimonial.quote}"
                                        </p>
                                    </CardContent>
                                    <CardFooter className="justify-center">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-primary text-primary"
                                                />
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline">FAQ</Badge>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Frequently Asked Questions
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                    Everything you need to know about Hack Tuah.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl py-12">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {[
                                    {
                                        question: "What is Hack Tuah?",
                                        answer: "Hack Tuah is a comprehensive PDF guide that provides proven strategies and tactics to grow your Twitter following, increase engagement, and build authority. It includes hook templates, thread structures, and a 30-day implementation system based on my experience growing to 27K followers and 100M+ impressions in one year.",
                                    },
                                    {
                                        question:
                                            "How will I receive the PDF after purchase?",
                                        answer: "Immediately after your purchase, you'll receive an email with a download link to access your Hack Tuah PDF. You'll also have access to a members area where you can download the PDF and any bonus materials included in your package.",
                                    },
                                    {
                                        question:
                                            "Is this suitable for Twitter beginners?",
                                        answer: "Absolutely! Hack Tuah is designed for Twitter users at all levels. If you're just starting out, you'll find step-by-step guidance to build your presence from scratch. More experienced users will discover advanced strategies to scale their growth and engagement.",
                                    },
                                    {
                                        question:
                                            "How long will it take to see results?",
                                        answer: "Many users start seeing improvements in engagement within the first week of implementing our hook formulas. Follower growth typically becomes noticeable within 2-4 weeks of consistent application of the thread structure and 30-day system.",
                                    },
                                    {
                                        question:
                                            "Do you offer a money-back guarantee?",
                                        answer: "Yes! We offer a 30-day money-back guarantee. If you implement our strategies and don't see results, simply email us with evidence that you've tried the methods, and we'll process your refund.",
                                    },
                                    {
                                        question:
                                            "What makes Hack Tuah different from other Twitter guides?",
                                        answer: "Hack Tuah focuses on actionable, proven strategies rather than theory. It includes a complete catalog of hook templates that actually work, a 3-step formula for viral threads, and a 30-day implementation system. Most importantly, it's based on real results (27K followers and 100M+ impressions in one year).",
                                    },
                                ].map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                    >
                                        <AccordionTrigger>
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                <section
                    id="buy"
                    className="w-full py-12 md:py-24 lg:py-32 bg-primary/5"
                >
                    <div className="container mx-auto  px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant="secondary">
                                        Limited Time Offer
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                        Ready to Grow Your Twitter Account?
                                    </h2>
                                    <p className="text-muted-foreground md:text-xl/relaxed">
                                        Get instant access to the exact system I
                                        used to gain 27K followers and 100M+
                                        impressions in just one year.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" asChild>
                                        <Link href="#buy-now">
                                            Get Hack Tuah Now{" "}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Instant Download</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>30-Day Guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>Proven Results</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Card className="w-full max-w-md">
                                    <CardHeader>
                                        <CardTitle>
                                            Get Hack Tuah Today
                                        </CardTitle>
                                        <CardDescription>
                                            Complete Twitter Growth System
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">
                                                    Hack Tuah PDF
                                                </span>
                                                <span className="font-bold">
                                                    $47
                                                </span>
                                            </div>
                                            <div className="rounded-lg bg-muted p-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>Original Price</span>
                                                    <span className="line-through">
                                                        $97
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>Discount</span>
                                                    <span className="text-green-500">
                                                        -$50
                                                    </span>
                                                </div>
                                                <div className="mt-2 flex items-center justify-between font-bold">
                                                    <span>Today's Price</span>
                                                    <span>$47</span>
                                                </div>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                <p>
                                                    This offer expires soon. Get
                                                    it now before the price
                                                    increases!
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-4">
                                        <Button
                                            className="w-full"
                                            size="lg"
                                            asChild
                                        >
                                            <Link href="#checkout">
                                                <Download className="mr-2 h-4 w-4" />{" "}
                                                Get Instant Access
                                            </Link>
                                        </Button>
                                        <div className="flex items-center justify-center text-xs text-muted-foreground">
                                            <p>
                                                Secure payment via Stripe or
                                                PayPal
                                            </p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container mx-auto  grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Have Questions?
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                We're here to help. Reach out to our team for
                                any questions about Hack Tuah.
                            </p>
                        </div>
                        <div className="flex gap-4 lg:justify-end">
                            <Button asChild>
                                <Link href="mailto:support@hacktuah.com">
                                    Contact Support
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#faq">View FAQ</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-background">
                <div className="container mx-auto  flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <Zap className="h-5 w-5 text-primary" />
                            <span>Hack Tuah</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Hack Tuah. All rights
                            reserved.
                        </p>
                    </div>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
