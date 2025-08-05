import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, Heart, MapPin, MessageSquare, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BibleVerse } from "@/components/bible-verse"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { GoogleMap } from "@/components/google-map"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] flex items-center justify-center">
                <Image
                    src="/images/harmony-aerial.jpg"
                    alt="Church congregation"
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Harmony Baptist Church</h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Loving Jesus ~ A Heart for God ~ Caring for People
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                            Join Us for Worship
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                        >
                            Watch Latest Sermon
                        </Button>
                    </div>
                </div>
            </section>

            {/* Bible Verse of the Day */}
            <section className="bg-sky-50 py-6">
                <div className="container mx-auto px-4">
                    <BibleVerse />
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Church Family</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are a vibrant community of believers dedicated to serving God and our community. Join us as we grow
                            together in faith and fellowship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Calendar className="h-8 w-8 text-sky-600 mr-3" />
                                    <h3 className="text-xl font-semibold">Upcoming Events</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="border-b border-gray-100 pb-2">
                                        <p className="font-medium">Sunday Worship</p>
                                        <p className="text-sm text-gray-500">March 17, 10:00 AM</p>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <p className="font-medium">Bible Study</p>
                                        <p className="text-sm text-gray-500">March 19, 7:00 PM</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Community Outreach</p>
                                        <p className="text-sm text-gray-500">March 21, 9:00 AM</p>
                                    </li>
                                </ul>
                                <Link href="/events" className="flex items-center text-sky-600 mt-4 text-sm font-medium">
                                    View All Events <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Music className="h-8 w-8 text-sky-600 mr-3" />
                                    <h3 className="text-xl font-semibold">Latest Sermons</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="border-b border-gray-100 pb-2">
                                        <p className="font-medium">Walking in Faith</p>
                                        <p className="text-sm text-gray-500">Pastor John Smith</p>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <p className="font-medium">The Power of Prayer</p>
                                        <p className="text-sm text-gray-500">Pastor Sarah Johnson</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">Finding Peace in Chaos</p>
                                        <p className="text-sm text-gray-500">Pastor Michael Brown</p>
                                    </li>
                                </ul>
                                <Link href="/sermons" className="flex items-center text-sky-600 mt-4 text-sm font-medium">
                                    View All Sermons <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Heart className="h-8 w-8 text-sky-600 mr-3" />
                                    <h3 className="text-xl font-semibold">Get Involved</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    There are many ways to serve and connect with our church community. Find your place in one of our
                                    ministries.
                                </p>
                                <div className="space-y-2">
                                    <Link href="/ministries/youth" className="flex items-center text-gray-700 hover:text-sky-600">
                                        <ChevronRight className="h-4 w-4 mr-1 text-sky-600" /> Youth Ministry
                                    </Link>
                                    <Link href="/ministries/worship" className="flex items-center text-gray-700 hover:text-sky-600">
                                        <ChevronRight className="h-4 w-4 mr-1 text-sky-600" /> Worship Team
                                    </Link>
                                    <Link href="/ministries/outreach" className="flex items-center text-gray-700 hover:text-sky-600">
                                        <ChevronRight className="h-4 w-4 mr-1 text-sky-600" /> Community Outreach
                                    </Link>
                                </div>
                                <Link href="/ministries" className="flex items-center text-sky-600 mt-4 text-sm font-medium">
                                    View All Ministries <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Experience the warmth of our community and the power of worship. Services at 9:00 AM and 11:00 AM.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                            Plan Your Visit
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            View Service Times
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear from members of our church family about how faith and community have impacted their lives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
                                            <Image
                                                src={`/placeholder.svg?height=80&width=80&text=Member${i}`}
                                                alt="Church member"
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-gray-600 italic mb-4">
                                            "This church has become my second home. The community here is so welcoming and supportive through
                                            all of life's challenges."
                                        </p>
                                        <p className="font-semibold">Sarah Johnson</p>
                                        <p className="text-sm text-gray-500">Member since 2018</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <NewsletterSignup />
                    </div>
                </div>
            </section>

            {/* Location and Contact Info */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>
                            <div className="flex items-start mb-4">
                                <MapPin className="h-5 w-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Harmony Baptist Church</p>
                                    <p className="text-gray-600">20932 Co Rd 79, Andalusia, AL 36421</p>
                                </div>
                            </div>
                            <div className="flex items-start mb-4">
                                <Calendar className="h-5 w-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Service Times</p>
                                    <p className="text-gray-600">Sundays at 9:00 AM & 11:00 AM</p>
                                    <p className="text-gray-600">Wednesday Bible Study at 7:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start mb-4">
                                <MessageSquare className="h-5 w-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Contact Us</p>
                                    <p className="text-gray-600">info@gracechurch.org</p>
                                    <p className="text-gray-600">(334) 222-8117</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </div>
                        <GoogleMap
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0651335551956!2d-86.38054940321044!3d31.35718179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8891f0f8fe6e82a3%3A0xfa1401d23658ec08!2sHARMONY!5e0!3m2!1sen!2sus!4v1754428619605!5m2!1sen!2sus"                            title="Grace Community Church Location"
                            className="h-[300px] md:h-[400px]"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
