import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import { Dumbbell, Users, Clock, Award, ArrowRight } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"

// Calculate years of experience based on founding year
const calculateYearsExperience = () => {
  const foundingYear = 2020; // Adjust this to the actual founding year of YADFit
  const currentYear = new Date().getFullYear();
  return Math.max(0, currentYear - foundingYear); // Ensure non-negative
};

export default function Home() {
  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yad.jpg"
            alt="Gym background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              TRANSFORM YOUR BODY, <span className="text-primary">TRANSFORM YOUR LIFE</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-up">
              Join YADFit Gym and experience state-of-the-art facilities, expert trainers, and a supportive community
              dedicated to helping you achieve your fitness goals.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
            <a href="https://wa.me/+94767370688">
              <Button size="lg" className="bg-primary hover:bg-primary-700 text-white">
                Join Now
              </Button>
              </a>

              <Link href="tel:+94 76 737 0688">
              <Button
  size="lg"
  variant="outline"
  className="bg-black text-white border-white hover:bg-gray-800 hover:border-white"
>
  Book a Trial
</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of fitness services to help you achieve your goals, whether you're looking to build
              muscle, lose weight, or improve your overall health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Dumbbell className="h-10 w-10 text-primary" />}
              title="Personal Training"
              description="Work one-on-one with our expert trainers to create a personalized fitness plan tailored to your specific goals and needs."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Group Classes"
              description="Join our energetic group classes ranging from HIIT and cycling to yoga and pilates, designed for all fitness levels."
            />
            <ServiceCard
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="24/7 Gym Access"
              description="Enjoy unlimited access to our state-of-the-art facilities and equipment, available 24 hours a day, 7 days a week."
            />
          </div>

         {/* <div className="text-center mt-12">
            <Link href="/classes" className="inline-flex items-center text-primary hover:text-primary-400 font-medium">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div> */}
        </div> 
      </section>

      {/* Stats Section */}
<section className="py-16 bg-primary">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="p-4">
        <AnimatedCounter end={465} suffix="+" className="text-4xl md:text-5xl font-bold text-white" />
        <p className="text-white/80 font-medium mt-2">Happy Members</p>
      </div>
      <div className="p-4">
        <AnimatedCounter end={15} suffix="+" className="text-4xl md:text-5xl font-bold text-white" />
        <p className="text-white/80 font-medium mt-2">Expert Trainers</p>
      </div>
      <div className="p-4">
        <AnimatedCounter end={30} suffix="+" className="text-4xl md:text-5xl font-bold text-white" />
        <p className="text-white/80 font-medium mt-2">Fitness Classes</p>
      </div>
      <div className="p-4">
        <AnimatedCounter
          end={calculateYearsExperience()} // Dynamic years
          suffix="+"
          className="text-4xl md:text-5xl font-bold text-white"
        />
        <p className="text-white/80 font-medium mt-2">Years Experience</p>
      </div>
    </div>
  </div>
</section>

      {/* About Preview Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/yadlogo.jpg"
                  alt="About PowerFit Gym"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-xl">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-primary">YADFit</span>
              </h2>
              <p className="text-gray-400 mb-6">
                At YADFit, we're more than just a gym. We're a community dedicated to helping you achieve your fitness
                goals in a supportive and motivating environment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">State-of-the-art Equipment</h3>
                    <p className="text-gray-400">Access to the latest fitness technology and equipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">Expert Trainers</h3>
                    <p className="text-gray-400">Certified professionals to guide your fitness journey</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">Flexible Membership</h3>
                    <p className="text-gray-400">Options to suit your schedule and budget</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
              <Button className="bg-primary hover:bg-primary-700 text-white">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-primary">Members Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our members who have transformed their lives with YADFit.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join YADFit today and take the first step towards a healthier, stronger you. No contracts, no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/+94767370688">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Join Now
            </Button>
            </a>
            
            <Link href="/contact" >
            <Button
  size="lg"
  variant="outline"
  className="bg-black text-white border-white hover:bg-gray-800 hover:border-white"
>
  Contact Us
</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
