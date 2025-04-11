import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import ClassSchedule from "@/components/class-schedule"
import ClassCard from "@/components/class-card"

export default function ClassesPage() {
  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              Our <span className="text-primary">Classes</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Discover our wide range of fitness classes designed to challenge, motivate, and transform your body.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Overview */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our <span className="text-primary">Fitness Classes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From high-intensity workouts to mindful movement, we offer a variety of classes to suit all fitness levels
              and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClassCard
              title="HIIT"
              description="High-Intensity Interval Training to maximize calorie burn and improve cardiovascular fitness."
              image="/placeholder.svg?height=400&width=600"
              duration="45 min"
              intensity="High"
            />
            <ClassCard
              title="Strength Training"
              description="Build muscle, increase strength, and improve body composition with our comprehensive strength program."
              image="/placeholder.svg?height=400&width=600"
              duration="60 min"
              intensity="Moderate-High"
            />
            <ClassCard
              title="Yoga"
              description="Improve flexibility, balance, and mental clarity with our rejuvenating yoga classes."
              image="/placeholder.svg?height=400&width=600"
              duration="60 min"
              intensity="Low-Moderate"
            />
            <ClassCard
              title="Spin"
              description="High-energy indoor cycling workouts set to motivating music for an effective cardio session."
              image="/placeholder.svg?height=400&width=600"
              duration="45 min"
              intensity="Moderate-High"
            />
            <ClassCard
              title="Pilates"
              description="Strengthen your core, improve posture, and enhance body awareness with controlled movements."
              image="/placeholder.svg?height=400&width=600"
              duration="50 min"
              intensity="Low-Moderate"
            />
            <ClassCard
              title="Boxing"
              description="Learn boxing techniques while getting a full-body workout that improves coordination and power."
              image="/placeholder.svg?height=400&width=600"
              duration="60 min"
              intensity="High"
            />
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Weekly <span className="text-primary">Schedule</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Plan your week with our comprehensive class schedule. Filter by day, class type, or instructor to find the
              perfect session for you.
            </p>
          </div>

          <ClassSchedule />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Try a Class?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book your first class today or contact us for more information about our fitness programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Book a Class
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
