import Image from "next/image"
import { Button } from "@/components/ui/button"
import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import TrainerCard from "@/components/trainer-card"

export default function AboutPage() {
  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about1.jpg"
            alt="About YADFit Gym"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              About <span className="text-primary">YADFit</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Our mission is to inspire and empower our community to achieve their fitness goals and lead healthier
              lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Founded in 2024, YADFit began with a simple vision: to create a fitness environment that welcomes
                everyone, regardless of their fitness level or background.
              </p>
              <p className="text-gray-400 mb-4">
                What started as a small studio with just a few pieces of equipment has grown into a comprehensive
                fitness center with state-of-the-art facilities, expert trainers, and a thriving community of members.
              </p>
              <p className="text-gray-400 mb-4">
                Our philosophy is centered around the belief that fitness is not just about physical transformation, but
                also about mental well-being and building a supportive community.
              </p>
              <p className="text-gray-400">
                Today, YADFit continues to evolve and expand, always staying true to our core values of inclusivity,
                excellence, and passion for fitness.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="YADFit Gym Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              At YADFit, our values guide everything we do, from how we design our programs to how we interact with
              our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in everything we do, from our facilities to our training programs.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Inclusivity</h3>
              <p className="text-gray-400">We welcome everyone, regardless of fitness level, age, or background.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">We foster a supportive community that motivates and inspires each other.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                We continuously evolve and innovate to provide the best fitness experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-primary">Trainers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of certified trainers is dedicated to helping you achieve your fitness goals with personalized
              guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainerCard
              name="Alex Johnson"
              role="Head Trainer"
              specialties={["Strength Training", "HIIT", "Nutrition"]}
              image="/placeholder.svg?height=400&width=300"
              instagram="https://instagram.com"
              facebook="https://facebook.com"
            />
            <TrainerCard
              name="Maria Rodriguez"
              role="Fitness Coach"
              specialties={["Yoga", "Pilates", "Functional Training"]}
              image="/placeholder.svg?height=400&width=300"
              instagram="https://instagram.com"
              facebook="https://facebook.com"
            />
            <TrainerCard
              name="David Kim"
              role="Personal Trainer"
              specialties={["Bodybuilding", "Weight Loss", "Sports Performance"]}
              image="/placeholder.svg?height=400&width=300"
              instagram="https://instagram.com"
              facebook="https://facebook.com"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Take the first step towards a healthier, stronger you with PowerFit. Our team is ready to support you on
            your fitness journey.
          </p>

          <a href="https://wa.me/+94767370688">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Join Now
          </Button>
          </a>
        </div>
      </section>
    </>
  )
}
