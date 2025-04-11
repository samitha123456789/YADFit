import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member for 2 years",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "PowerFit has completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the community keeps me motivated. I've lost 30 pounds and gained so much confidence!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Member for 1 year",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "As someone who was intimidated by gyms, PowerFit made me feel welcome from day one. The facilities are top-notch, and the 24/7 access fits perfectly with my busy schedule.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Member for 3 years",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The group classes at PowerFit are incredible! High energy, great instructors, and I've made some amazing friends. It's the highlight of my day and keeps me coming back for more.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Member for 6 months",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "I joined PowerFit to prepare for my wedding, and the results exceeded my expectations. The personal trainers created a program specifically for my goals, and I've never felt better!",
      rating: 5,
    },
    {
      id: 5,
      name: "Emily Thompson",
      role: "Member for 1.5 years",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "After trying several gyms in the area, PowerFit is by far the best. The equipment is always clean and well-maintained, and the staff remembers your name. It feels like a fitness family.",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Member for 2 years",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The variety of classes keeps my workouts fresh and challenging. I've seen tremendous improvement in my strength and endurance since joining PowerFit.",
      rating: 4,
    },
  ]

  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              Member <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Hear what our members have to say about their experience at PowerFit.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Share Your <span className="text-primary">Success Story</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We'd love to hear about your experience at PowerFit. Share your story and inspire others on their fitness
              journey.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-700 text-white">
              Submit Your Testimonial
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
